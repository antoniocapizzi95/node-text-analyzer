import { TextAnalyzer

 } from "./TextAnalyzer";
describe('TextAnalyzer', () => {
    const text = "This is a sample text for testing purposes.";

    test('countWords should return the correct number of words', () => {
        const analyzer = new TextAnalyzer(text);
        expect(analyzer.countWords()).toBe(8);
    });

    test('countLetters should return the correct number of letters', () => {
        const analyzer = new TextAnalyzer(text);
        expect(analyzer.countLetters()).toBe(35);
    });

    test('countSpaces should return the correct number of spaces', () => {
        const analyzer = new TextAnalyzer(text);
        expect(analyzer.countSpaces()).toBe(7);
    });

    test('frequentWords should return the correct object of frequent words', () => {
        const analyzer = new TextAnalyzer(text);
        const frequentWords = analyzer.frequentWords(1);
        expect(frequentWords).toEqual({
          'this': 1,
          'is': 1,
          'a': 1,
          'sample': 1,
          'text': 1,
          'for': 1,
          'testing': 1,
          'purposes': 1
        });
    });
  
    test('countWords should return 0 for an empty string', () => {
      const analyzer = new TextAnalyzer('');
      expect(analyzer.countWords()).toBe(0);
    });
  
    test('countLetters should return 0 for an empty string', () => {
      const analyzer = new TextAnalyzer('');
      expect(analyzer.countLetters()).toBe(0);
    });
  
    test('countSpaces should return 0 for an empty string', () => {
      const analyzer = new TextAnalyzer('');
      expect(analyzer.countSpaces()).toBe(0);
    });
  
    test('frequentWords should return an empty object for an empty string', () => {
      const analyzer = new TextAnalyzer('');
      const frequentWords = analyzer.frequentWords(1);
      expect(frequentWords).toEqual({});
    });
  
    test('frequentWords should return the correct object of frequent words with custom frequency', () => {
      const analyzer = new TextAnalyzer("apple apple orange orange banana banana apple");
      const frequentWords = analyzer.frequentWords(2);
      expect(frequentWords).toEqual({
        'apple': 3,
        'orange': 2,
        'banana': 2
      });
    });
  
    test('frequentWords should not include words with frequency below the specified minimum', () => {
      const analyzer = new TextAnalyzer("apple apple orange orange banana banana apple");
      const frequentWords = analyzer.frequentWords(3);
      expect(frequentWords).toEqual({
        'apple': 3
      });
    });
  });