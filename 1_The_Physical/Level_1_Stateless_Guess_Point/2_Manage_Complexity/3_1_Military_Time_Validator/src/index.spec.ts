import validateRange from './index'

describe('military time validator passing tests', () => {

    it('knows 05:05 - 05:06 is a valid range', () => {
        expect(validateRange('05:05 - 05:06')).toBe(true);
    })
})
