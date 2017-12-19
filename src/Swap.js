export class Swap {
    constructor() {
    }

    /*
  params:{source:number[],i:number,j:number}
  return null
  */
    public swapInArray(source, i, j) {
        if (source instanceof Array) {
            if (i === j) {
                return
            }
            if (i >= source.length || j >= source.length) {
                return
            }
            let temp;
            temp = source[i];
            source[i] = source[j];
            source[j] = temp
        }
    }
}