import Swap from './Swap'

export class Random{
    constructor(){
        this.swap = new Swap()
    }
    private decide(min,max){
        if(arguments.length<2){
            return false;
        }
        if(typeof min !=='number' && typeof max !== 'number'){
            return false;
        }
        if(max <= 0){
            return false;
        }
        if(min < 0){
            return false
        }
    }
    /*
     params:{min:number,max:number}
     return number
     */
    public randomIntRange(min,max){
       let isTrue = this.decide(min,max);
       if(!isTrue){
           return
       }
        if(max === min){
            return min
        }
        return Math.floor(Math.random()*(max-min+1)+min)
    }
    /*
   params:null
   return number
   */
    public randomDouble100(){
        return Math.random() * 100;
    }
    /*
   params:{min:number,max:number}
   return float
   */
    public randomDoubleRange(min,max){
        let isTrue = this.decide(min,max);
        if(!isTrue){
            return
        }
        return Math.random() * (max - min) + min;
    }
    /*
   params:{source:number[],shuffleCount:number}
   return number[]
   */
    public randomShuffle(source,shuffleCount){
        if(source instanceof Array){
            if(source.length === 0){
                return source
            }
            shuffleCount = shuffleCount || source.length;
            if(shuffleCount === 0){
                return source
            }
            let swapInArray = this.swap.swapInArray;
            let randRange = this.randomIntRange;
            let maxIndex = source.length -1;
            for(let i = 0;i<=maxIndex && i<shuffleCount;i++){
                swapInArray(source,randRange(i,maxIndex))
            }
            return source
        }

    }
}