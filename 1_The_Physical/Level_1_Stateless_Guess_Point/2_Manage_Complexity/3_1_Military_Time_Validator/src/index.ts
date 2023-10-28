
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

    const {time1, time2} = timeRangeBreakUp(timeRange);

    console.log(time1,time2);

    if (time1.hour == time2.hour && time1.min >= time2.min)
        return invalid 

    if (time1.hour > 23 || time2.hour > 23)
        return invalid

    if (time1.min > 59 || time2.min > 59)
        return invalid

    return valid;
}