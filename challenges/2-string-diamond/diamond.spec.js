import diamond from './diamond';
import length3Diamond from './mocks/length3Diamond';
import length7Diamond from './mocks/length7Diamond';

describe('diamond', () => {
  it('returns a string containing a diamond shape', () => {
    expect(diamond(3)).toBe(length3Diamond);
    expect(diamond(7)).toBe(length7Diamond);
  });

  it('returns null if length is an even number', () => {
    expect(diamond(2)).toBeNull();
    expect(diamond(16)).toBeNull();
  });

  it('returns null if length is zero', () => {
    expect(diamond(0)).toBeNull();
  });

  it('returns null if length is negative', () => {
    expect(diamond(0)).toBeNull();
  });
});
