const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write Something!");
    }
    else{
        let li = document.createElement("li");// html element is created named li
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");// to add cross icon
        span.innerHTML = "\u00d7"; // cross icon code.
        li.appendChild(span);
    }
    inputBox.value = ''; //empty the input text field
    saveData(); // calling the saveData
}
// for checked and unchecked the task added.
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
         alert("Task completed");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        alert("Task deleted");
        saveData();
    }
}, false);

// for retaining the data after refresh the page.
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();