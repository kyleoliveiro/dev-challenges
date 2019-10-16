import peelString from './peelString';

describe('peelString', () => {
  it('removes first and last letters from a string', () => {
    expect(peelString('hello world')).toBe('ello worl');
  });

  it('returns null if string is less than 2 characters', () => {
    expect(peelString('hi')).toBeNull();
  });
});
