import { getFileReader } from './FileReaderStrategy';
import { TextAnalyzer } from './TextAnalyzer';
import { program } from 'commander';

program
    .version('1.0.0')
    .description('insert an url or a path containing a text file to analyze it')
    .arguments('<url>')
    .action(async (url: string) => {
        try {
            const reader = getFileReader(url);
            const content = await reader.read(url);
            const analyzer = new TextAnalyzer(content);
            
            console.log(`Total words: ${analyzer.countWords()}`);
            console.log(`Total letters: ${analyzer.countLetters()}`);
            console.log(`Total spaces: ${analyzer.countSpaces()}`);
            console.log(`Frequent words: `, analyzer.frequentWords());
        } catch (error) {
            console.error('Error processing the file:', error);
        }
    });

program.parse(process.argv);