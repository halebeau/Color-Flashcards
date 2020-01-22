const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

export const formatDate = (timeStamp) => {
    const timeValue = new Date(timeStamp);
    return `${timeValue.getDate()} ${monthNames[timeValue.getMonth()]}`
}