import findStats from './index'

interface Stats {
    min: number | null;
    max: number| null;
    average: number| null;
    length: number| null;
    error: string | null;
}

const cases: { arr: number[]; object: Stats}[] = [
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
    {
        arr: [2, 4, 21, -8, 53, 40],
     object: {
        min: -8,
        max: 53,
        average: 18.666666666666668,
        length: 6,
        error: null,
        }
    },
    {
        arr: [],
     object: {
        min: null,
        max: null,
        average: null,
        length: null,
        error: 'invalid input',
        }
    },
]

describe('stats calculator', () => {

    it.each(cases)(
        'calculates stats for case $arr to be $object' , 
        ({arr, object}) => {
            const stats = findStats(arr);
            expect(stats).toEqual(object);
        }
    )

    it.each(cases)(
        'calculates max for case $arr to be $object.max' , 
        ({arr, object}) => {
            const stats = findStats(arr);
            expect(stats.max).toEqual(object.max);
        }
    )

    it.each(cases)(
        'calculates min for case $arr to be $object.min' , 
        ({arr, object}) => {
            const stats = findStats(arr);
            expect(stats.min).toEqual(object.min);
        }
    )

    it.each(cases)(
        'calculates average for case $arr to be $object.average' , 
        ({arr, object}) => {
            const stats = findStats(arr);
            expect(stats.average).toEqual(object.average);
        }
    )

    it.each(cases)(
        'calculates number of elements for case $arr to be $object.length elements' , 
        ({arr, object}) => {
            const stats = findStats(arr);
            expect(stats.length).toEqual(object.length);
        }
    )
    
});