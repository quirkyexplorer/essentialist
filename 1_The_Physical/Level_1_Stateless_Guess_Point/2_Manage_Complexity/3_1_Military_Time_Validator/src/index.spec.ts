import validateRange from './index'

const validTimeCases: {time: string; answer: boolean}[] = [

    { 
    time: '05:05 - 05:06',
    answer: true 
    },

    { 
    time: '05:06 - 07:06',
    answer: true 
    },

    { 
    time: '00:00 - 23:59',
    answer: true 
    },

    { 
    time: '00:59 - 01:00',
    answer: true 
    },

    
]

const invalidTimeCases: {time: string; answer: boolean}[] = [

    { 
    time: '05:06 - 25:04',
    answer: false 
    },
    { 
        time: '26:06 - 27:04',
        answer: false 
    },
    { 
        time: '05:06 - 06:60',
        answer: false 
    },
    { 
        time: '05:61 - 06:10',
        answer: false 
    },
    { 
        time: '06:36 - 05:06',
        answer: false 
    },
    { 
        time: '05:06 - 05:05',
        answer: false 
    },

    { 
        time: '05:06 - 05:06',
        answer: false 
    },
    
]


const wrongFormatCases: {time: string; answer: boolean}[] = [
    { 
        time: '1:06 - 12:06',
        answer: false
    },
    { 
        time: '05:006 - 07:06',
        answer: false
    },
    { 
        time: ': - :',
        answer: false
    },
    { 
        time: '0:0 - 0:0',
        answer: false
    },
    { 
        time: '',
        answer: false
    },
    { 
        time: '00:00-01:02',
        answer: false
    },
    { 
        time: '00-000:1:02',
        answer: false
    },
    { 
        time: ' - 0000:1:02',
        answer: false
    },
    { 
        time: '05:06 - 06:500',
        answer: false
    },
]


describe('military time validator valid times', () => {

    it.each(validTimeCases)(
        'knows the validity in times in  $time to be $answer',
        ({time, answer}) => {
            const validation = validateRange(time);
            expect(validation).toBe(answer);
        }
    )
})


describe('tests for wrong times', () => {

    it.each(invalidTimeCases)(
        `knows the validity in times in  $time to be $answer`, 
        ({time, answer}) => {
            const [start, end] = time.split(" - ");
            const description = `knows there is a discrepancy between ${start} and ${end}`;
            const validation = validateRange(time);
            expect(validation).toBe(answer);
    })


})

describe('tests for wrong formats', () => {

    it.each(wrongFormatCases)('knows validy of $time to be $answer', 
        ({time, answer}) => {
            const validation = validateRange(time);
            expect(validation).toBe(answer);
    })



})