export default function truncateText(str, lenght) {
    if (str.lenght < lenght ) return str;

    return str.slice(0, lenght) + "..."
}