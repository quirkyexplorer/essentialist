import findStats from './index'

const answerArr = [
    {
        min: 0,
        max: 0,
        average: 0,
        length: 0,
        error: 'invalid data',
    },
]

describe('stats calculator', () => {
    


    it('calculates stats for [0]', () => {
        const numbers = [0];
        const stats = findStats(numbers);
        expect(stats).toEqual(answerArr[0]);
    })
});