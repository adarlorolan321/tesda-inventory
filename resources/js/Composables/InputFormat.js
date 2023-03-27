export function userInputFormat() {
    // const dateFormat = {
    //     altFormat: 'd/m/Y',
    //     altInput: true,
    //     dateFormat: 'Y-m-d',
    //     allowInput: true,
    //     minDate: 'today'
    // }
    const dateFormat = (minDate,maxDate) => {
       return {
           altFormat: 'd/m/Y',
           altInput: true,
           dateFormat: 'Y-m-d',
           allowInput: true,
           minDate: minDate,
           maxDate: maxDate,
       }
    }
    const timeFormat = (minTime,maxTime) => {
       return {
           enableTime: true,
           noCalendar: true,
           dateFormat: 'H:i',
           minTime: minTime,
           maxTime: maxTime
       }
    }

    return {
        dateFormat,
        timeFormat
    }
}
