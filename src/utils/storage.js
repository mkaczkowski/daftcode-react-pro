const STORAGE_KEY = "__data";

export function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function load() {
  return localStorage.getItem(STORAGE_KEY);
}
