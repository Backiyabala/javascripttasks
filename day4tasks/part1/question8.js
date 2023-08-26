//rortate an array by k times using anonymous function

let a=[1,2,3,4,5];
let k=5;
let rotate=function(...a){
    for(let i=o=0;i<=a.length-1;i++){
        a[i+1]=a[i];
    }
           
}

rotate(...a);
console.log(a);