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

    const testCases: Array<[string, { isValid: boolean, error: Record<string, string> }]>  = [
        ['cat', {
            isValid: false,
            error: {
                    Length: 'password must be between 5 and 15 characters',
                    Digit: 'password must have at least one digit',
                    Case: 'password must have at least one Uppercase'
            }
        }],

        [ 'electroencephalograph', {
            isValid: false,
            error: {
                    Length: 'password must be between 5 and 15 characters',
                    Digit: 'password must have at least one digit',
                    Case: 'password must have at least one Uppercase'
            }
        }],
        [ 'Cat',  {
            isValid: false,
            error: {
                Length: 'password must be between 5 and 15 characters',
                Digit: 'password must have at least one digit',
            }
        }],

        [ 'Electroencephalograph', {
            isValid: false,
            error: {
            Length: 'password must be between 5 and 15 characters',
            Digit: 'password must have at least one digit',
        }
        }],

        ['cat1', {
            isValid: false,
            error: {
            Length: 'password must be between 5 and 15 characters',
            Case: 'password must have at least one Uppercase'
            }
        }],
        
        ['electroencephalograph3', {
            isValid: false,
            error: {
                    Length: 'password must be between 5 and 15 characters',
                    Case: 'password must have at least one Uppercase'
            }
            
        }],
        ['ocean', {
            isValid: false,
            error: {
                    Digit: 'password must have at least one digit',
                    Case: 'password must have at least one Uppercase'
            }
        }],
        ['acclimatization', {
            isValid: false,
            error: {
                    Digit: 'password must have at least one digit',
                    Case: 'password must have at least one Uppercase'
            }
        }],
        ['ocean11', {
            isValid: false,
            error: {
                    Case: 'password must have at least one Uppercase'
            }
        }],
        ['Cat1', {
            isValid: false,
            error: {
            Length: 'password must be between 5 and 15 characters', 
        }
        }],
        ['Electroencephalograph7', {
            isValid: false,
            error: {
                Length: 'password must be between 5 and 15 characters', 
            }
        }],
        ['Ocean', {
            isValid: false,
            error: {
                Digit: 'password must have at least one digit', 
            }
        }],
        ['Ocean11', {
            isValid: true,
            error: {}
        }],
        ['', {
            isValid: false,
            error: {
            Length: 'password must be between 5 and 15 characters',
            Digit: 'password must have at least one digit',
            Case: 'password must have at least one Uppercase'
        }
        }],


    ]

 testCases.forEach(([input, expected]) => {
    let errorCount =  Object.keys(expected.error).length
    let errorKind = Object.keys(expected.error).join(', ')
    it(`tests if "${input}" yields ${errorCount} errors: ${errorKind}`, () => {
      const result = validate(input);
      expect(result).toEqual(expected);
    });
  });
    
});


