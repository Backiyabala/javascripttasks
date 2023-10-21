
let container=document.createElement('div');
container.setAttribute("class","container border");

let row=document.createElement('div');
row.setAttribute('class','row bg-secondary');
let col1=document.createElement('div');
col1.setAttribute('class','col-lg-4 col-sm-12');
let col2=document.createElement('div');
col2.setAttribute('class','col-lg-4 col-sm-12');
let col3=document.createElement('div');
col3.setAttribute('class','col-lg-4 col-sm-12');

 

col1.innerHTML=`<div class="card bg-primary-subtle m-2 " style="width:24rem;text-align:center">
<div id="card-header1" class="card-header p-3 bg-success text-light">name</div>
<div class="card-body mx-auto">
  <img id="flag1" src="..." class="card-img " style="height:200px">
  <p  class="card-text">Capital:<span id="capital1"></span></p>
  <p  class="card-text">Region:<span id="region1"></span></p>
  <p  class="card-text">Country Code:<span id="code1"></span></p>
  <p  class="card-text">Latlng:<span id="latlng1"></span></p>
  <a   id="button1" href="#" target=".blank" class="btn btn-primary">Click for Weather</a>
</div>
</div>`;
col2.innerHTML=`<div class="card bg-primary-subtle m-2" style="width:24rem; text-align:center">
<div id="card-header2" class="card-header p-3 bg-success text-light ">name</div>
<div class="card-body mx-auto">
  <img id="flag2" src="..." class="card-img" style="height:200px">
  <p  class="card-text">Capital:<span id="capital2"></span></p>
  <p  class="card-text">Region:<span id="region2"></span></p>
  <p  class="card-text">Country Code:<span id="code2"></span></p>
  <p  class="card-text">Latlng:<span id="latlng2"></span></p>
  <a id="button2" href="#" target=".blank" class="btn btn-primary">Click for Weather</a>
</div>
</div>`;
col3.innerHTML=`<div class="card bg-primary-subtle m-2" style="width:24rem; text-align:center">
<div id="card-header3" class="card-header p-3 bg-success text-light">name</div>
<div class="card-body mx-auto">
  <img id="flag3" src="..." class="card-img" style="height:200px">
  <p class="card-text">Capital:<span id="capital3"></span></p>
  <p class="card-text">Region:<span id="region3"></span></p>
  <p class="card-text">Country Code:<span id="code3"></span></p>
  <p  class="card-text">Latlng:<span id="latlng3"></span></p>
  <a   id="button3" href="#" target=".blank" class="btn btn-primary">Click for Weather</a>
</div>
</div>`;


document.body.append(container);
container.append(row);
row.append(col1,col2,col3);



fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

.then(response => response.json())

.then(data=> data.splice(0,3))

.then((res)=>{
     document.getElementById('card-header1').innerHTML=res[0].name;
     document.getElementById('card-header2').innerHTML=res[1].name;
     document.getElementById('card-header3').innerHTML=res[2].name;
     document.getElementById('capital1').innerHTML=res[0].capital;
     document.getElementById('capital2').innerHTML=res[1].capital;
     document.getElementById('capital3').innerHTML=res[2].capital;
     document.getElementById('region1').innerHTML=res[0].region;
     document.getElementById('region2').innerHTML=res[1].region;
     document.getElementById('region3').innerHTML=res[2].region;
     document.getElementById('code1').innerHTML=res[0].alpha3Code;
     document.getElementById('code2').innerHTML=res[1].alpha3Code;
     document.getElementById('code3').innerHTML=res[2].alpha3Code;
     document.getElementById('latlng1').innerHTML=res[0].latlng;
     document.getElementById('latlng2').innerHTML=res[1].latlng;
     document.getElementById('latlng3').innerHTML=res[2].latlng;
     let id="1b408f6580f426f4aa90a3e784a21274";
     document.getElementById('button1').href=`https://api.openweathermap.org/data/2.5/weather?q=${res[0].name}&appid=${id}`;
     document.getElementById('button2').href=`https://api.openweathermap.org/data/2.5/weather?q=${res[1].name}&appid=${id}`;
     document.getElementById('button3').href=`https://api.openweathermap.org/data/2.5/weather?q=${res[2].name}&appid=${id}`;
  
  })

 fetch('https://restcountries.com/v3.1/all')
 .then(response => response.json())
 .then(countries => {
       let need=['AFG','ALA','ALB'];
      
       countries.forEach(country=>{
         if(need[0].includes(country.cca3)){
            document.getElementById('flag1').src=country.flags.svg;
            }
            if(need[1].includes(country.cca3)){
              document.getElementById('flag2').src=country.flags.svg;
              }
              if(need[2].includes(country.cca3)){
                document.getElementById('flag3').src=country.flags.svg;
                }
        })
})  

      

   
















