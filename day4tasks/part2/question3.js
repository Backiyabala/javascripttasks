//print the summ of all elements in an array using arrow function
let a=[10,20,30,48];

let sum=()=>{

    result=a.reduceRight((a,b)=>a+b);
    console.log(result);

}
sum();