export function userInputFormat() {
    const dateFormat = {
        altFormat: 'd/m/Y',
        altInput: true,
        dateFormat: 'Y-m-d',
        allowInput: true
    }
    const timeFormat = () => {
        return {
            enableTime: true,
            noCalendar: true,
            dateFormat: 'H:i'
        }
    }

    return {
        dateFormat,
        timeFormat
    }
}