//print odd numbers in an array using arrow function
let a=[5,7,2,11,19,10];
result=[];

let odd_number=x=>{
    if(x%2!=0){
    
    return result.push(x);
     
    }
}
for(let i in a)
{
    odd_number(a[i]);
    
}console.log(result)