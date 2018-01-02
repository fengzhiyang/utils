import Random from './Random'

export class Util {
    constructor() {
        this.random = new Random();
    }

    public formatParams(data) {
        let arr = [];
        if (data instanceof Object && Object.keys(data).length > 0) {
            for (let name of data) {
                arr.push(encodeURICompontent(name) + "=" + encodeURICompontent(data[name]));
            }
            ;
            arr.push('t=' + this.random.randomDouble100())
        }
        return arr.join('&')
    }

    public extends(obj) {
        let str = '',
            newObj = obj.constructor === Array ? [] : {};
        if (typeof obj !== 'object') {
            return
        }
        if (window.JSON) {
            str = JSON.stringify(obj);
            newObj = JSON.parse(str)
        } else {
            for (let item of obj) {
                newobj[item] = typeof obj[item] === 'object' ? this.extends(obj[item]) : obj[item];
            }
        }
        return newObj
    }




}