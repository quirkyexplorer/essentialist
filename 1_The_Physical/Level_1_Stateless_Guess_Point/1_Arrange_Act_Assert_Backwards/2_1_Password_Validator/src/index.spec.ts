import validate  from './index';

describe('password validator', () => {

  test('see if hello is between 5 and 15 characters hello', () => {
    const result = validate('hello');
    expect(result).toBe(false);
  })
})


