import validateRange from './index'

describe('military time validator passing tests', () => {

    it('knows if range occurs in the same hour, the right relation between starting and ending minutes', () => {
        expect(validateRange('05:05 - 05:06')).toBe(true);
    })

    it('checks for validy between times with the same minutes different hours', () => {
        expect(validateRange('05:06 - 07:06')).toBe(true);
    })
})


describe('military time validator failing tests', () => {

    it('knows there is a discrepancy in hours bigger than 23 ', () => {
        expect(validateRange('05:06 - 25:04')).toBe(false);
    })

    it('knows there is a discrepancy in hours bigger than 23 ', () => {
        expect(validateRange('26:06 - 27:04')).toBe(false);
    })

    it('finds discrepancy in minutes bigger than 59', () => {
        expect(validateRange('05:06 - 6:60')).toBe(false);
    })

    it('finds discrepancy in starting hours being bigger than ending hours', () => {
        expect(validateRange('06:36 - 05:06')).toBe(false);
    })

    it('knows if range occurs in the same hour, the starting minutes cannot be bigger than ending minutes', () => {
        expect(validateRange('05:06 - 05:05')).toBe(false);
    })



describe('invalidates for wrong formats', () => {

    it('knows validy of format 5:06 - 07:06 to be false', () => {
        expect(validateRange('5:06 - 07:06')).toBe(false);
    })

    it('knows validy of format 05:006 - 07:06 to be false', () => {
        expect(validateRange('05:006 - 07:06')).toBe(false);
    })

    it('knows validy of format : - : to be false', () => {
        expect(validateRange(': - :')).toBe(false);
    })

    it('knows validy of format 0:0 - 0:0 to be false', () => {
        expect(validateRange(': - :')).toBe(false);
    })

    it('knows validy of format ""  to be false', () => {
        expect(validateRange('')).toBe(false);
    })

    it('knows validy of format  05:06 05:05 to be false', () => {
        expect(validateRange('05:06 05:05')).toBe(false);
    })

    it('knows validy of format  05-06 : 05-05 to be false', () => {
        expect(validateRange('05-06 : 05-05')).toBe(false);
    })

    // it('knows validy of format  00:00-01:02 to be false', () => {
    //     expect(validateRange('00:00-01:02')).toBe(false);
    // })
})


})