import validate  from './index';

describe('password validator', () => {

  it('tests if hello is between 5 and 15 characters', () => {

    const expected = {
        isValid: true,
        error: 'valid password'
    }
    const result = validate('hello');
    console.log(result);
    expect(result).toEqual(expected);
  })

  it('tests if abcdefghijklmno is between 5 and 15 characters', () => {

    const expected = {
        isValid: true,
        error: 'valid password'
    }
    const result = validate('abcdefghijklmno');
    expect(result).toEqual(expected);
  })

  it('tests if abcdefghijklmnop is between 5 and 15 characters', () => {
    const expected = {
        isValid: false,
        error: 'error password must be between 5 and 15 characters'
    }
    const result = validate('abcdefghijklmnop');
    expect(result).toEqual(expected);
  })
  
  it('tests if hell is between 5 and 15 characters', () => {
    const expected = {
        isValid: false,
        error: 'error password must be between 5 and 15 characters'
    }
    const result = validate('hell');
    expect(result).toEqual(expected);
  })


})


