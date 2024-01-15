const inputBox =document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value ===''){
        alert("Fill in the Blanks");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00D7"
        li.appendChild(span);
    }
    inputBox.value="";
    savedata();
}
listcontainer.addEventListener("click",function(ev){
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle("checked");
        savedata();
    }
    else if(ev.target.tagName === "SPAN"){
        ev.target.parentElement.remove();
        savedata();
    }
}, false);
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML =localStorage.getItem("data");
}
showTask();
