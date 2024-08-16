/*       FUNCTIONS
 
A BLOCK OF CODE THAT GETS EXECUTED ORPERFORM FOLLOE=WING TASKS

*/


/* function syhello(){
  console.log("hey piyush");  
};
 */





/* function addNumbers (){
    var i;
    var ans = 0;

    for( i = 0; i < arguments.length ; i++){
        ans = ans + arguments[i];
    };

    return ans;
};

var result = addNumbers(84,85,294,67);

console.log(result)
 */





// SPREAD OPERATOR 


function addNumbers2 (...ayush){
    var ans = 0;
    var i;

    for( i = 0 ; i < ayush.length; i++){
        ans = ans + ayush[i];
    };

    return ans;
};

var show = addNumbers2(100,200,400);

console.log(show);