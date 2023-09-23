import validate  from './index';

describe('password validator', () => {

  it('tests if hello is between 5 and 15 characters hello', () => {
    const result = validate('hello');
    expect(result).toBe(false);
  })
})


