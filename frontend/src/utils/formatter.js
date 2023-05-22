export function formatTime(seconds) {
  if (seconds < 60) {
    return `${seconds}s`;
  } else if (seconds < 3600) {
    return new Date(seconds * 1000).toISOString().slice(14, 19);
  } else {
    return new Date(seconds * 1000).toISOString().slice(11, 19);
  }
}

export function formatPrice(price) {
  return price.toLocaleString();
}
