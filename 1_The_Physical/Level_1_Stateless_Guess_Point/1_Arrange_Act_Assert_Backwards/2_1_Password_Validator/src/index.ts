

export default function validate(input: string) {

    const message = {
        isValid: true,
        error: 'valid password'
    }

    if (input.length < 5 || input.length > 15) {
    
    }

    return message;

}