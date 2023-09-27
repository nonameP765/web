export function getLocalStorage(key: string) {
  const value = localStorage.getItem(key);

  if (value === null) return undefined;

  return value;
}

export function getLocalStorageObject(key: string) {
  const value = localStorage.getItem(key);

  if (value === null) return undefined;

  return JSON.parse(value);
}

export function setLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function setLocalStorageObject(key: string, value: object) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeLocalStorage(key: string) {
  return localStorage.removeItem(key);
}
