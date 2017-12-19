export class Cache{
    constructor(){
        this.cookie = document.cookie;
        this.storage = localStorage
    }

    public setStorage(name,data){
        if(!name && typeof name !== 'string'){
            return
        }
        let arr = object.keys(data);
        if(arr.length<=0){
            return
        }
        this.storage.setItem(name,JSON.stringify(data))
    }
    public getStorage(name){
        if(!name && typeof name !== 'string'){
            return
        }
        let data =  JSON.parse(this.storage.getItem(name));
        let arr = object.keys(data);
        if(arr.length > 0){
            return data
        }
    }
    public deleteStorage(name){
        if(!name && typeof name !== 'string'){
            return
        }
        let data = JSON.parse(this.storage.getItem(name));
        if(!data){
            return
        }
        this.storage.removeItem(name)
    }
    public setCookie(name,value,expireDays){

    }
}