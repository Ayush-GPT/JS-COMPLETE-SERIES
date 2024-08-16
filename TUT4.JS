// HIGH ORDER FUNCTION :- A FUNCT WHICH TSKE FUNCT AS AN ARGUMENT


/* function add(a,b,cb){
      cb(a+b);
};

add(10,30,(val)=> console.log("value is"+val)); */







// RETURNING FUNCTION FROM A FUNCTION


function ayush(x,y,ret){
    var res = x*y;
    ret(res);
    return ()=> console.log(res);
};

var show = ayush(3,6,()=>{});

show();
