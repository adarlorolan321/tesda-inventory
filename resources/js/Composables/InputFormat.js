export function userInputFormat() {
    // const dateFormat = {
    //     altFormat: "d/m/Y",
    //     altInput: true,
    //     dateFormat: "Y-m-d",
    //     allowInput: true,
    //     minDate: "today",
    // };
    const dateFormat = (minDate, maxDate = null) => {
        return {
            altFormat: "d/m/Y",
            altInput: true,
            dateFormat: "Y-m-d",
            allowInput: true,
            minDate: minDate,
            maxDate: maxDate,
        };
    };
    const timeFormat = {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
    };

    return {
        dateFormat,
        timeFormat,
    };
}
