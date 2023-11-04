function evaluateSyntax(timeRange: string): boolean {

    if (timeRange.indexOf(' - ') == -1 || timeRange.split('-').length != 2) 
        return false

    if (timeRange.indexOf(':') == -1 || timeRange.split(':').length != 3)
        return false
    
    // parseTimeRange is sensitive to the symbol format being corret, that is why is being
    // passed here after symbols have been checked
    const { hour1, hour2, minutes1, minutes2 } = parseTimeRange(timeRange);

    // checking for right amount of digits in each hour and minute
    if (hour1.length !=2 || minutes1.length != 2 || hour2.length !=2 || minutes2.length != 2)
    return false

    return true;
}

function parseTimeRange(timeRange: string) {
    const time = timeRange.split(" - ")
    const hour1 = time[0].slice(0,2);
    const hour2 = time[1].slice(0,2);
    const [, minutes1]  = time[0].split(':');
    const [, minutes2] = time[1].split(':');
    
    return { hour1, hour2, minutes1, minutes2 }
}

function evaluateTimeRange(timeRange: string) {

    const { hour1, hour2, minutes1, minutes2 } = parseTimeRange(timeRange);

    if (hour1 > hour2) {
        if(hour1 == '1:') 
        console.log(hour1,  hour2)
        return false;
    }

    if (hour1 == hour2 && minutes1 >= minutes2 )
        return false;    

    if ( hour1 > '23' || hour2 > '23')
        return false;

    if ( minutes1 > '59' || minutes2 > '59')
        return false;
    
    return true;
}



export default function validateRange(timeRange: string): boolean{

    if(!evaluateSyntax(timeRange)) {
      return false;
    }

    return evaluateTimeRange(timeRange);

}