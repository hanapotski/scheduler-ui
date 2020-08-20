export function capitalize(str) {
  if (!str) return;
  if (str.split(' ').length > 1) {
    return str
      .split(' ')
      .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
      .join(' ');
  }
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export function getCachedUserData() {
  const userData = localStorage.getItem('schedulerAppUser');
  return JSON.parse(userData) || null;
}
