

export default function validateRange(timeRange: string): boolean{

    if (timeRange == '')
        return false

    if (timeRange.indexOf(' - ') == -1 || timeRange.split('-').length != 2) 
        return false
    
    if (timeRange.indexOf(':') == -1 || timeRange.split(':').length != 3)
        return false


    const time = timeRange.split(" - ")
    const hour1 = time[0].slice(0,2);
    const hour2 = time[1].slice(0,2);
    const [, minutes1]  = time[0].split(':');
    const [, minutes2] = time[1].split(':');


    if (hour1.length !=2 || minutes1.length != 2 || hour2.length !=2 || minutes2.length != 2)
        return false

    if (time[0] > time[1])
        return false;

    if ( hour1 > '23' || hour2 > '23')
        return false;

    if ( minutes1 > '59' || minutes2 > '59')
        return false;
    
    return true;
}