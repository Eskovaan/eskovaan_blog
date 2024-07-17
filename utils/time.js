
export function getFormattedDateTime() {
    // Create a new Date object to get the current date and time
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-based, so add 1
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Format the day, month, hours, minutes, and seconds to be two digits
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    // Return the formatted date and time as a string in the format DD.MM.YYYY HH:MM:SS
    return `${formattedDay}.${formattedMonth}.${year} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
