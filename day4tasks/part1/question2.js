//print the string with title caps using anonymous function

let a=['backiya','lakshmi','muthu','pandi','komal','yazhini'];
result=[];

let title_caps=function(x){

    return result.push(x[0].toUpperCase() + x.substr(1));
    
}

for(let i in a){
    title_caps(a[i]);
}
console.log(result);

//print the string with title caps using IIFE function

let a=['backiya','lakshmi','muthu','pandi','komal','yazhini'];
result=[];

for(let i in a){

(function(x){

    return result.push(x[0].toUpperCase() + x.substr(1));
    
} )(a[i]);
}

console.log(result);