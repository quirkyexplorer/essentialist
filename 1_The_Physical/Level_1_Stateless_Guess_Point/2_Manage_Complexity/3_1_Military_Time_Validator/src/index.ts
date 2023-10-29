
import { time } from "console";


export default function validateRange(timeRange: string): boolean{

    const time = timeRange.split(" - ");
    const hour1 = time[0].slice(0,2);
    const hour2 = time[1].slice(0, 2);
    const minutes1 = time[0].slice(-2);
    const minutes2 = time[0].slice(-2);
    
    if (time[0] > time[1])
        return false;

    if ( hour1 > '23' || hour2 > '23')
        return false;

    if ( minutes1 > '59' || minutes2 > '59')
        return false;
    
    return true;
}