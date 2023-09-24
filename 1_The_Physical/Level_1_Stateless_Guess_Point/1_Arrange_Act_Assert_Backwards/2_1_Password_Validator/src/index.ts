

export default function validate(input: string) {

    const message = {
        isValid: true,
        error: null as null | string // type assertion in typescript, error can be either null or string
    }

    if (input.length < 5 || input.length > 15) {
        message.isValid = false
        message.error = 'error password must be between 5 and 15 characters'
    }

    return message;

}