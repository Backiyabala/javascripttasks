let count=10;

let number=document.getElementById('number');
number.addEventListener('click',function(event){
    ten(event,callback());
});

function ten(callback){
    setTimeout(() => {
        number.textContent=count--;
        callback();
    }, 1000);
    
}
function nine(callback){
    setTimeout(() => {
        number.textContent=count--;
        callback();
    }, 1000);
} 
function eight(callback){
    setTimeout(() => {
        number.textContent=count--;
        callback();
    }, 1000);
}
function seven(callback){
    setTimeout(() => {
        number.textContent=count--;
        callback();
    }, 1000);
}
function six(callback){
    setTimeout(() => {
        number.textContent=count--;
        callback();
    }, 1000);
}
function five(callback){
    setTimeout(() => {
        number.textContent=count--;
        callback();
    }, 1000);
}
function four(callback){
    setTimeout(() => {
        number.textContent=count--;
        callback();
    }, 1000);
}
function three(callback){
    setTimeout(() => {
        number.textContent=count--;
        callback();
    }, 1000);
}
function two(callback){
    setTimeout(() => {
        number.textContent=count--;
        callback();
    }, 1000);
}

function one(callback){
    setTimeout(() => {
        number.textContent=count--;
        callback();
    }, 1000);
}

        



ten(function(){
    
    nine(function () {
        eight(function () {
            seven(function () {
                six(function () {
                    five(function () {
                        four(function () {
                            three(function () {
                                  two(function () {
                                    one(function () {
                    
                                        number.textContent='HAPPY INDEPENDENCE DAY';
                                    
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

