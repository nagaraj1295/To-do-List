
let outtxt = document.getElementById("tasksl");
function add(){
    let intxt = document.getElementById("intext").value;
    outtxt.innerHTML +="<li>"+intxt+"</li>";  
}