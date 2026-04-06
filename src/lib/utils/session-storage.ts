export function createSessionStorageBoolean(key: string) {
  return {
    get: () => {
      try {
        return sessionStorage.getItem(key) === '1';
      } catch {
        return false;
      }
    },
    set: (value: boolean) => {
      try {
        sessionStorage.setItem(key, value ? '1' : '0');
      } catch {
        // ignore
      }
    }
  };
}
