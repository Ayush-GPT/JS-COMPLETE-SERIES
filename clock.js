const button = document.getElementById("stop-button");






function showTime(){
    const curretTime = new Date();
    /* console.log(curretTime); */
    const time = `${curretTime.getHours()}:${curretTime.getMinutes()}:${curretTime.getSeconds()}`;
   var show = document.getElementById("time");
   show.innerHTML = time;
   


}

 var interval = setInterval(()=>{
    showTime();
},1000
);

button.addEventListener("click",()=>{
    clearInterval(interval);
});