import validate  from './index';

describe('password validator', () => {

    // testing all possible cases were errors might come back
    // length, digit, uppercase
    // length, digit
    // length, uppercase
    // length
    // digit, uppercase
    // digit
    // uppercase 

    // 4 character word = cats
    // > 15 character word = electroencephalograph
    // 14 character word + number =
    // 4 character word + number = 
    // 15 character word = acclimatization


 // tests fails for length digit and upppercase
  it('tests if cat is between 5 and 15 characters', () => {

    const expected = {
        isValid: false,
        error: {
                Length: 'password must be between 5 and 15 characters',
                Digit: 'password must have at least one digit',
                Case: 'password must have at least one Uppercase'
        }
    }
    const result = validate('cat');
    console.log(result);
    expect(result).toEqual(expected);
  })

  it('tests if electroencephalograph is between 5 and 15 characters', () => {

    const expected = {
        isValid: false,
        error: {
                Length: 'password must be between 5 and 15 characters',
                Digit: 'password must have at least one digit',
                Case: 'password must have at least one Uppercase'
        }
    }
    const result = validate('electroencephalograph');
    expect(result).toEqual(expected);
  })

  // tests fails for length and digit only - length has 2 types over the limit and under limit

  it('tests if Cat is between 5 and 15 characters', () => {
    const expected = {
        isValid: false,
        error: {
            Length: 'password must be between 5 and 15 characters',
            Digit: 'password must have at least one digit',
        }
    }
    const result = validate('Cat');
    expect(result).toEqual(expected);
  })
  
  it('tests if Electroencephalograph is between 5 and 15 characters', () => {
    const expected = {
        isValid: false,
        error: {
            Length: 'password must be between 5 and 15 characters',
            Digit: 'password must have at least one digit',
        }
    }
    const result = validate('Electroencephalograph');
    expect(result).toEqual(expected);
  })

// test fails for length and uppercase only  - length has upper and lower limit words

  it('tests if cat1 is at least one digit in the password', () => {
    const expected = {
        isValid: false,
        error: {
                Length: 'password must be between 5 and 15 characters',
                Case: 'password must have at least one Uppercase'
        }
    }

    const result = validate('cat1');
    expect(result).toEqual(expected);
  })

  it('tests if electroencephalograph3 is between 5 and 15 characters', () => {
    const expected = {
        isValid: false,
        error: {
                Length: 'password must be between 5 and 15 characters',
                Case: 'password must have at least one Uppercase'
        }
    }

    const result = validate('electroencephalograph3');
    expect(result).toEqual(expected);
  })

// test fails for digit and uppercase

it('tests if ocean is invalid and matches errors', () =>{
    const expected = {
        isValid: false,
        error: {
                Digit: 'password must have at least one digit',
                Case: 'password must have at least one Uppercase'
        }
    }

    const result = validate('ocean');
    expect(result).toEqual(expected);
})

it('tests if acclimatization is invalid and matches errors', () =>{
    const expected = {
        isValid: false,
        error: {
                Digit: 'password must have at least one digit',
                Case: 'password must have at least one Uppercase'
        }
    }

    const result = validate('extraterrestrial');
    expect(result).toEqual(expected);
})

// tests fails for uppercase only
  it('tests if ocean11 is invalid', () =>{
    const expected = {
        isValid: false,
        error: {
                Case: 'password must have at least one Uppercase'
        }
    }

    const result = validate('extraterrestrial');
    expect(result).toEqual(expected);
  })


// testing fails for length only
it('tests if Cat1 is invalid and matches errors', () =>{
    const expected = {
        isValid: false,
        error: {
            Length: 'password must be between 5 and 15 characters', 
        }
    }

    const result = validate('Cats1');
    expect(result).toEqual(expected);
})

it('tests if Electroencephalograph7 is invalid and matches errors', () =>{
    const expected = {
        isValid: false,
        error: {
            Length: 'password must be between 5 and 15 characters', 
        }
    }

    const result = validate('Electroencephalograph7');
    expect(result).toEqual(expected);
})

// tests fails for digit only

it('tests if Ocean is valid', () =>{
    const expected = {
        isValid: false,
        error: {
            Digit: 'password must have at least one digit', 
        }
    }

    const result = validate('Ocean');
    expect(result).toEqual(expected);
})

  // all errors are avoided 

  it('tests if Ocean11 is valid', () =>{
    const expected = {
        isValid: true,
        error: {
            
        }
    }

    const result = validate('Ocean11');
    expect(result).toEqual(expected);
})

})


