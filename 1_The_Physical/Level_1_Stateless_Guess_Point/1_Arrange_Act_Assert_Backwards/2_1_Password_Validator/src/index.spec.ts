import validate  from './index';

describe('password validator', () => {

  it('tests if hello is between 5 and 15 characters', () => {
    const result = validate('hello');
    expect(result).toBe(true);
  })

  it('tests if abcdefghijklmno is between 5 and 15 characters', () => {
    const result = validate('abcdefghijklmno');
    expect(result).toBe(true);
  })

  it('tests if hell is between 5 and 15 characters', () => {
    const result = validate('hell');
    expect(result).toBe(true);
  })

  it('tests if abcdefghijklmnop is between 5 and 15 characters', () => {
    const result = validate('abcdefghijklmnop');
    expect(result).toBe(true);
  })

})


