export function userInputFormat() {
    const dateFormat = () => {
        return {
            altFormat: 'd/m/Y',
            altInput: true,
            dateFormat: 'Y-m-d',
        }
    }
    const timeFormat = () => {
        return {
            enableTime: true,
            noCalendar: true,
            dateFormat: 'H:i'
        }
    }

    return {
        dateFormat,timeFormat
    }
}
