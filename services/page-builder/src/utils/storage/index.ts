interface Storage {
  get(key: string): string | null;
  set(key: string, value: string): void;
  remove(key: string): void;
}

const initLocalStorage = (prefix: string): Storage => {
  return {
    get: (key: string) => localStorage.getItem(`${prefix}/${key}`),
    set: (key: string, value: string) =>
      localStorage.setItem(`${prefix}/${key}`, value),
    remove: (key: string) => localStorage.removeItem(`${prefix}/${key}`),
  }
};

export const previewStorage = initLocalStorage('preview');
