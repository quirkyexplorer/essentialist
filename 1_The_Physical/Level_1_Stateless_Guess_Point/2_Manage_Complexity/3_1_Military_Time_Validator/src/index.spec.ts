import validateRange from './index'

describe('military time validator passing tests', () => {

    it('knows 05:05 - 05:06 is a valid range', () => {
        expect(validateRange('05:05 - 05:06')).toBe(true);
    })
})


describe('military time validator failing tests', () => {

    it('knows 05:06 - 05:05 is an invalid range', () => {
        expect(validateRange('05:06 - 05:05')).toBe(false);
    })
})