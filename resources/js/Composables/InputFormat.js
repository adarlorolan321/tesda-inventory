export function userInputFormat() {
    // const dateFormat = {
    //     altFormat: "d/m/Y",
    //     altInput: true,
    //     dateFormat: "Y-m-d",
    //     allowInput: true,
    //     minDate: "today",
    // };
    const dateFormat = (config) => {
        return {
            altFormat: "d/m/Y",
            altInput: true,
            dateFormat: "Y-m-d",
            allowInput: true,
            ...config,
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
