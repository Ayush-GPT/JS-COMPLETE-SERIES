
alert("hello");

const button = document.getElementById("get-location-button");

   


 function gotlocation(position){
    console.log(position);
 }

function failed(){
    console.log("failed to get location");
}


button.addEventListener("click",async()=>{
    navigator.geolocation.getCurrentPosition(gotlocation,failed);
});
