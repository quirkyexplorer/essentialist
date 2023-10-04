import exp from 'constants';
import findStats from './index'

interface Stats {
    min: number;
    max: number;
    average: number;
    length: number;
    error: string | null;
}

const answerArr: { arr: number[]; object: Stats}[] = [
    {
       arr: [0],
     object: {
        min: 0,
        max: 0,
        average: 0,
        length: 1,
        error: null,
        },
    },
    {
        arr: [1,2],
     object: {
        min: 1,
        max: 2,
        average: 1.5,
        length: 2,
        error: null,
    }
    },
]

describe('stats calculator', () => {
    
    it('calculates stats for [0]', () => {
        const numbers = answerArr[0].arr;
        const stats = findStats(numbers);
        expect(stats).toEqual(answerArr[0].object);
    });

    it('calculates stats for [1, 2]', () => {
        const stats = findStats(answerArr[1].arr);
        console.log(stats);
        expect(stats).toEqual(answerArr[1].object);
    });

});