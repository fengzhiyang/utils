export class Class{
    constructor(){
        this.regExp=new RegExp('(\\s|^)' + cla + '(\\s|$)')
    }
    public hasClass(ele,cla){

        return this.regExp.test(ele.className)
    }
    public addClass(ele,cla){
        if(this.hasClass(ele,cla)){
            return
        }
        ele.className += ' '+cla
        // let classArr = ele.className.split(' ');
        // classArr.push(cla);
        // ele.className = '';
        // ele.className = classArr.join(' ')
    }
    public removeClass(ele,cla){
        if(!this.hasClass(ele,cla)){
            return
        }
        ele.className = ele.className.replace(this.regExp,' ');
    }

}