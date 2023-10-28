
function timeRangeBreakUp(timeRange: string) {

    let array = timeRange.split(/[ :-]/).filter(Boolean).map(number => parseInt(number)) ;
    
    const time1 = {
        hour: array[0],
        min: array[1]
    }
    const time2 = {
        hour: array[2],
        min: array[3]
    }

    return {time1, time2};
}


export default function validateRange(timeRange: string): boolean{
    const valid = true;
    const invalid = false;

    const time = timeRangeBreakUp(timeRange);

    if (time.time1.hour == time.time2.hour && time.time1.min >= time.time2.min)
    return invalid 

    return valid;
}