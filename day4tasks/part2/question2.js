//print the string with title caps using arrow function

let a=['backiya','lakshmi','muthu','pandi','komal','yazhini'];
result=[];

let title_caps=x=>{

    return result.push(x[0].toUpperCase() + x.substr(1));
    
}

for(let i in a){
    title_caps(a[i]);
}
console.log(result);
