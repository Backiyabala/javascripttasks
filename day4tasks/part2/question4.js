//return all the prime nmbers in an array using arrow function
let a=[13,4,7,11,8,100,17,21];

let notprime=[];

let prime_number=x=>{
    for(let i=2;i<x;i++){
        if(x%i==0){
            return notprime.push(x);
        }
      
    }  
}


for(let number in a){
    prime_number(a[number]);
    
}
console.log(a.filter(n=> !notprime.includes(n)));