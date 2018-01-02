export class Time {
    constructor() {
    }

    public currentTime() {
        return this.getYear() + '/' + this.getMonth() + '/' + this.getDay()
    }

    public getYear() {
        return this.getNowTime().getFullYear()
    }

    public getMonth() {
        return this.getNowTime().getMonth() + 1;
    }

    public getDay() {
        return this.getNowTime().getDay()
    }

    public getMinutes() {
        return this.getNowTime().getMinutes()
    }

    public getHours() {
        return this.getNowTime().getHours()
    }

    public getSeconds() {
        return this.getNowTime().getSeconds()
    }

    public getDate() {
        return this.getNowTime().getDate()
    }

    public setDate(time) {
        if (!time && time < 0) {
            return
        }
        this.getNowTime().setDate(time)
    }
    public toGMTString(){
        return this.getNowTime().toGMTString()
    }

    public getNowTime() {
        return new Date()
    }
}