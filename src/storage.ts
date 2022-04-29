export const getStorageValue = <T extends []>(key: string): T => {
    if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        const value = localStorage.getItem(key);
        if (value) {
            return JSON.parse(value) as T;
        }
        return [] as T;
    }
    return [] as T;
}

export const setStorageValue = <T>(key: string, data: T) => {
    if (key && data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
}