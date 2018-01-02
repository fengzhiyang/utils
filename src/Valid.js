export class Valid {
    constructor() {
        this.phone = /^[1][0-9]{10}$/;
        this.passWord = /^[a-zA-Z0-9]{6,10}$/;
        this.eMail=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/

    }

    public validPhone(str) {
        if (typeof str !== 'string' && str.length <= 0) {
            return
        }
        return this.phone.test(str)
    }

    public validPassWord(str) {
        if (typeof str !== 'string' && str.length <= 0) {
            return
        }
        return this.passWord.test(str);
    }
}