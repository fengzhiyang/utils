export class Valid{
    constructor(){
        this.phone = /^[1][0-9]{10}$/
    }
    public validPhone(str){
        if(typeof str !== 'string'&& str.length<0){
            return
        }
        return this.phone.test(str)
    }
}