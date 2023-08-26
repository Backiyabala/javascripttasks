
// //print the summ of all elements in an array using anonymous function
// let a=[10,20,30,48];
// let sum =function(){

//     result=a.reduceRight((a,b)=>a+b);
//     console.log(result);

// }
// sum();


//print the summ of all elements in an array using IIFE function
let a=[10,20,30,48];
(function(){

    result=a.reduceRight((a,b)=>a+b);
    console.log(result);

})();