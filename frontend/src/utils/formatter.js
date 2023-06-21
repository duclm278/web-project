export function formatTime(seconds) {
    const minutePart = Math.floor(seconds / 60);
    const secondPart = seconds % 60;
    return `${minutePart}:${secondPart}`
}

export function formatPrice(price) {
    return price.toLocaleString();
}
