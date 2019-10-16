import countVowels from './countVowels';

describe('countVowels', () => {
  it('returns the number of vowels in a string', () => {
    expect(countVowels('fly')).toBe(0);
    expect(countVowels('hello world')).toBe(3);
    expect(countVowels('C00L bEaNs')).toBe(2);
    expect(countVowels('brrr!')).toBe(0);
  });
});
