// Print the total population of countries using reduce function

// require the library xhr2
let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// handle the response data
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);

    let result=data.filter((value,index,data)=>{
       
       let jsarray= Object.entries(currency.push(data[index].currencies));
          for(let item in jsarray){
             if(item.name=='United States Dollar'){
                 return data[index].name.common;
                }
            }


    });
        console.log (result);
    

    
};

// send the http request
xhr.send();