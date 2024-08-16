const button = document.getElementById("click");
const uname = document.getElementById("username1");
const username = document.getElementById("username");

button.addEventListener("click",()=>{
    const value = uname.value;
    localStorage.setItem("name",value);
});

window.addEventListener("load",()=>{
    const value = localStorage.getItem("name"); // to get entered name from text box
    username.innerHTML = value; // to show entred name on screen on  place of ayush mane
});


button.addEventListener("click",()=>{
   const val = localStorage.getItem("name");
   username.innerHTML = val;
})

