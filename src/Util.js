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

    public unique(arr) {
        if (new Set()) {
            return [...new Set(arr)]
        } else {
            let newArr = [],
                obj = {};
            for (let i = 0; i < arr.length; i++) {
                if (!obj[arr[i]]) {
                    newArr.push(arr[i]);
                    obj[arr[i]] = 1;
                }
            }
            return newArr;
        }
    }

    public equal(arr1, arr2) {
        if (arr1 === arr2) return true;
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false
        }
        return true
    }

    public isEmptyObject(obj) {
        if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
            return false
        }
        return Object.keys(obj).length > 0
    }

    // public isArrayOrObject(obj){
    //     if(obj && typeof obj === 'object' && object.keys().length>0) return 'object'
    // }
    public objectToQueryString(obj) {
        if (!this.isEmptyObject(obj)) return false;
        let params = [];
        for (let key of obj) {
            let value = obj[key];
            if (!value) return false;
            if (value instanceof Array) {
                for (let i = 0; i < value.length; i++) {
                    params.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));

                }
                continue;
            }
            pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return params.join('&')
    }

}