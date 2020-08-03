export function capitalize(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export function getCachedUserData() {
  const userData = localStorage.getItem('schedulerAppUser');
  return JSON.parse(userData) || null;
}
