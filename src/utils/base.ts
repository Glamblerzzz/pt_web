export class base {
    constructor() {

    }
    /**
     * setLocalStorage
     * 存储localstorage
     */
    public setLocalStorage(key: string, val: string): void {
        localStorage.setItem(key, val)
    }
    /**
     * getLocalStroge
     */
    public getLocalStroge(key: string): string | null {
        return localStorage.getItem(key)
    }
}