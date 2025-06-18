const storages = {
  localStorage,
  sessionStorage,
};

export function getLSItem(key, isParse) {
  const result = localStorage.getItem(key) || sessionStorage.getItem(key);
  if (isParse) {
    return result ? JSON.parse(result) : null;
  } else {
    return result;
  }
}

export const setLSItem = (key, data, useSession) => {
  storages[useSession ? "sessionStorage" : "localStorage"].setItem(
    key,
    typeof data === "object" ? JSON.stringify(data) : data
  );
};

export const removeLSItem = (key) => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
};
