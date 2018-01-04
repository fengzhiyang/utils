export class Valid {
    constructor() {
        this.phone = /^[1][0-9]{10}$/;
        this.passWord = /^[a-zA-Z0-9]{6,10}$/;
        this.eMail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        this.card = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
        this.url = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
    }

    public isPhone(str) {
        if (typeof str !== 'string' && str.length <= 0) return false;
        return this.phone.test(str)
    }

    public isPassWord(str) {
        if (typeof str !== 'string' && str.length <= 0) return false;
        return this.passWord.test(str);
    }

    public isEmail(str) {
        if (typeof str !== 'string' && str.length <= 0) return false;
        return this.eMail.test(str)
    }

    public isCard(str) {
        if (typeof str !== 'string' && str.length <= 0) return false;
        return this.card.test(str);
    }

    public isUrl(str) {
        if (typeof str !== 'string' && str.length <= 0) return false;
        return this.url.test(str);
    }
}