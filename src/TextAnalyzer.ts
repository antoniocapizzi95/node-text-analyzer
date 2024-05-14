export class TextAnalyzer {
    constructor(private content: string) {}

    countWords(): number {
        const wordsArray = this.content.match(/\b\w+\b/g);
        return wordsArray ? wordsArray.length : 0;
    }

    countLetters(): number {
        return this.content.replace(/[^a-zA-Z]/g, '').length;
    }

    countSpaces(): number {
        return (this.content.match(/\s/g) || []).length;
    }

    frequentWords(minFrequency: number = 10): Record<string, number> {
        const cleanedContent = this.content.replace(/[^\w\s]/g, '');
        const words = cleanedContent.toLowerCase().split(/\s+/).filter(Boolean);
        const frequency: Record<string, number> = {};
        
        words.forEach(word => {
            frequency[word] = (frequency[word] || 0) + 1;
        });
        
        return Object.fromEntries(Object.entries(frequency).filter(([_, count]) => count >= minFrequency));
    }
}