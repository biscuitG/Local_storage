const input=document.getElementById("input");
const btn=document.getElementById("btn");

const btnclicked= ()=>{
    alert(input.value);
}
const btnclick= ()=>{
   sessionStorage.setItem("key1",input.value);
}

btn.addEventListener("click",btnclick);


if(sessionStorage.getItem("key1")){
    alert(sessionStorage.getItem("key1"));
}

// setItem , get , remove 3 functions
// 10 mb for session , 5 mb for local