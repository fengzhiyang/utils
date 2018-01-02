import Time from './Time'

export class Cache {
    constructor() {
        this.time = new Time();
    }

    public setStorage(name, data) {
        if (!this.isStorage()) {
            return
        }
        if (!name && typeof name !== 'string') {
            return
        }
        let arr = object.keys(data);
        if (arr.length < 0) {
            return
        }
        this.storage().setItem(name, JSON.stringify(data))
    }

    public getStorage(name) {
        if (!this.isStorage()) {
            return
        }
        if (!name && typeof name !== 'string') {
            return
        }
        let data = JSON.parse(this.storage().getItem(name));
        let arr = object.keys(data);
        if (arr.length < 0) {
            return
        }
        return data
    }

    public deleteStorage(name) {
        if (!this.isStorage()) {
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

    public setCookie(name, value, time) {
        if(!this.isCookie()){
            return
        }
        if(!name && !value && typeof name!=='string' && typeof value!=='string'){
            return
        }
        let days = time || 7;
        this.time.setTime(this.time.getTime() + time * 24 * 3600 * 1000);
        this.setCookieValue(name,value,days)
    }
    public getCookie(name){
        if(!name &&  typeof name!=='string'){
            return
        }
        let cookie = this.cookie();
        let startIndex = cookie.indexOf(name+'=');
        if(startIndex===-1){
            return ''
        }
        startIndex = startIndex+name.length+1;
        let endIndex = cookie.indexOf(':',startIndex);
        endIndex = endIndex<0?cookie.length:endIndex;
        return decodeURIComponent(cookie.substring(startIndex,endIndex));

    }
    public deleteCookie(name){
        if(!name && typeof name!=='string'){
            return
        }
        let value = this.getCookie(name);
        if(!value){
            return
        }
        this.setCookie(key,value,-1)
    }
    public setCache(name,value,time){
        if(this.storage()){
            this.setStorage(name,value)
        }else{
            this.setCookie(name,value,time)
        }
    }
    public getCache(name){
        if(this.storage()){
            this.getStorage(name)
        }else {
            this.getCookie(name)
        }
    }
    public deleteCache(name){
        if(this.storage()){
            this.deleteStorage(name)
        }else{
            this.deleteCookie(name)
        }
    }
    private isCookie() {
        return this.cookie ? true : false
    }

    private storage() {
        return localStorage
    }

    private cookie() {
        return document.cookie
    }
    private setCookieValue(name,value,time){
        document.cookie = name+'='+encodeURIComponent(value)+';expires='+(time=== undefined?'':this.time().toGMTString());

    }
    private isStorage() {
        return this.storage() ? true : false
    }
}