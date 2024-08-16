/* /*  ARROW FUNCTION */


/* const ayush = () =>{
    console.log("Hello World");
};

ayush(); */


/* const add = (a,b) => a+b; // ONE LINER FUNCTION 

console.log(add(9,7)); */


/* const  sub = (a,b) => {
    return  a-b;
} 

console.log(sub(9,7)); */



// ARGUMENT KEYWORD IS NOT ALLOWED IN THE ARROW FUNCTION




// SPREAD OPERATOR


/* const addnum = (...ayush) =>{
    console.log(ayush);
};

addnum(3,5,6);  */





// 3) hoisting 


 say();
function say(){
    console.log("hello world");

}



// 4) This Keyword

const obj = {
    value:100,
    myFun: function(){
        console.log("Value"+this.value);
    }
}

obj.myFun();










