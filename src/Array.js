export class Array {
    constructor() {

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
}