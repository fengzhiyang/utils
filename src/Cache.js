import Time from './Time'

export class Cache {
    constructor() {
        this.time = new Time();
    }

    public setStorage(name, data) {
        if(!this.isStorage()){
            return
        }
        if (!name && typeof name !== 'string') {
            return
        }
        let arr = object.keys(data);
        if (arr.length <= 0) {
            return
        }
        this.storage().setItem(name, JSON.stringify(data))
    }

    public getStorage(name) {
        if(!this.isStorage()){
            return
        }
        if (!name && typeof name !== 'string') {
            return
        }
        let data = JSON.parse(this.storage().getItem(name));
        let arr = object.keys(data);
        if (arr.length <= 0) {
            return
        }
        return data
    }

    public deleteStorage(name) {
        if(!this.isStorage()){
            return
        }
        if (!name && typeof name !== 'string') {
            return
        }
        let data = JSON.parse(this.storage().getItem(name));
        if (!data) {
            return
        }
        this.storage().removeItem(name)
    }

    // public setCookie(name, value, expireDays) {
    //     let time = this.time;
    //     let days = expireDays || 7;
    //
    // }
    //
    // public isCookie() {
    //     return this.cookie.length > 0 ? true : false
    // }
    private storage(){
        return localStorage
    }
    private cookie(){
        return document.cookie
    }
    private isStorage() {
        return this.storage() ? true : false
    }
}