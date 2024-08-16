
/* function main(name){
    function sayName(){
        console.log(name);
    }
    return sayName;
};

var fun = main("ayush mane 👻");

console.log(fun); */



/* function adder(num){
    function add(b){
        console.log(num+b);
    }
    return add;
}

var show = adder(100);
var adders = adder(10);

show(12);
adders(10);
 */


const myname = document.getElementById("myname");
const button = document.getElementById("myButton");


/* function makeTextSizer(size){
    function chageSize(){
        myname.style.fontSize = `${size}px`;
    }
    return chageSize;
}

var see = makeTextSizer(20);
var see2 = makeTextSizer(100);
var see3 = makeTextSizer(30);

function disp(){
   see2();
};



setInterval(()=>{
   disp();
},3000) */

function increment(count){
    function incre(){
        console.log(count++);
    }
    return incre;
}
var res = increment(1);

button.addEventListener("click",res);

