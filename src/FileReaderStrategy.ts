import axios from 'axios';
import * as fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

export interface FileReaderStrategy {
    read(path: string): Promise<string>;
}

export class LocalFileReader implements FileReaderStrategy {
    async read(filePath: string): Promise<string> {
        return readFileAsync(filePath, { encoding: 'utf-8' });
    }
}

export class WebFileReader implements FileReaderStrategy {
    async read(url: string): Promise<string> {
        const response = await axios.get(url);
        return response.data;
    }
}

export function getFileReader(filePath: string): FileReaderStrategy {
    if (filePath.startsWith('http')) {
        return new WebFileReader();
    }
    return new LocalFileReader();
}