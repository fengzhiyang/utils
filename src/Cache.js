import Time from './Time'
import Util from './Util'

export class Cache {
    constructor() {
        this.time = new Time();
        this.util = new Util();
    }

    public setLoclStorage(name, data) {
        if (!this.isloclStorage()) return false;
        if (!name && typeof name !== 'string') return false;
        if (!this.util.isEmptyObject(data)) return false;
        this.loclStorage().setItem(name, JSON.stringify(data))
    }

    public getLoclStorage(name) {
        if (!this.isloclStorage()) return false;
        if (!name && typeof name !== 'string') return false;
        let data = JSON.parse(this.loclStorage().getItem(name));
        if (!this.util.isEmptyObject(data)) return false;
        return data
    }

    public deleteLoclStorage(name) {
        if (!this.isloclStorage()) return false;
        if (!name && typeof name !== 'string') return false;
        let data = JSON.parse(this.loclStorage().getItem(name));
        if (!this.util.isEmptyObject(data)) return false;
        this.storage().removeItem(name)
    }

    public getSessStorage(name) {
        if (!this.isSessStorage()) return false;
        if (!name && typeof name !== 'string') return false;
        let data = JSON.parse(this.sessStorage().getItem(name));
        if (!this.util.isEmptyObject(data)) return false;
        return data

    }

    public setSessStorage(name, data) {
        if (!this.isSessStorage()) return false;
        if (!name && typeof name !== 'string') return false;
        if (!this.util.isEmptyObject(data)) return false;
        this.sessStorage().setItem(name,data)
    }
    public deleteSessStorage(name) {
        if (!this.isSessStorage()) return false;
        if (!name && typeof name !== 'string') return false;
        let data = JSON.parse(this.loclStorage().getItem(name));
        if (!this.util.isEmptyObject(data)) return false;
        this.storage().removeItem(name)
    }

    public setCookie(name, value, time) {
        if (!this.isCookie()) {
            return
        }
        if (!name && !value && typeof name !== 'string' && typeof value !== 'string') {
            return
        }
        time = time || 7;
        this.time.setTime(this.time.getTime() + time * 24 * 3600 * 1000);
        this.setCookieValue(name, value, time)
    }

    public getCookie(name) {
        if (!this.isCookie()) {
            return
        }
        if (!name && typeof name !== 'string') {
            return
        }
        let cookieArr = this.cookie().replace(/\s/g, '').split(';');
        for (let i = 0; i < cookieArr.length; i++) {
            let tempArr = cookieArr[i].split('=');
            if (tempArr[0] === name) {
                return decodeURIComponent(tempArr[1]);
            }
        }
        return ''

    }

    public deleteCookie(name) {
        if (!name && typeof name !== 'string') {
            return
        }
        let value = this.getCookie(name);
        if (!value) {
            return
        }
        this.setCookie(key, '1', -1)
    }

    public setCache(name, value, time) {
        if (this.loclStorage()) {
            this.setLoclStorage(name, value)
        } else {
            this.setCookie(name, value, time)
        }
    }

    public getCache(name) {
        if (this.loclStorage()) {
            this.getLoclStorage(name)
        } else {
            this.getCookie(name)
        }
    }

    public deleteCache(name) {
        if (this.storage()) {
            this.deleteLoclStorage(name)
        } else {
            this.deleteCookie(name)
        }
    }

    private isCookie() {
        return this.cookie() ? true : false
    }

    private loclStorage() {
        return window.localStorage
    }

    private sessStorage() {
        return window.sessionStorage
    }

    private cookie() {
        return document.cookie
    }

    private setCookieValue(name, value, time) {
        document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + (time === undefined ? '' : this.time().toGMTString());

    }

    private isLoclStorage() {
        return this.loclStorage() ? true : false
    }

    private isSessStorage() {
        return this.sessStorage() ? true : false
    }
}