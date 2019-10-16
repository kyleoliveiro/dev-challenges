import peelString from './peelString';

describe('peelString', () => {
  it('removes first and last letters from a string', () => {
    expect(peelString('hello world')).toBe('ello worl');
  });

  it('returns null if string contains 2 or less characters', () => {
    expect(peelString('hi')).toBeNull();
  });
});
