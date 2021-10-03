
//I want to eventually push all new elements into this empty //array
var added = [ ];
//add counter for each new element
var counter = 1;
var formValidation = true;
function erase(rowNumber) {
    var rowToDelete = document.getElementById("row"+rowNumber);
    rowToDelete.parentNode.removeChild(rowToDelete);
};
function clean() {
    document.getElementById("username").value = null;
    document.getElementById("rol").value = "Escoja Rol";
    document.getElementById("estado").value ="Escoja Estado";
};

document.getElementById("add").addEventListener("click", function(){
  var table = document.getElementById("tabla").getElementsByTagName('tbody')[0];
  var userName = document.getElementById("username").value;
  var rol = document.getElementById("rol").value;
  var estado = document.getElementById("estado").value;
  //create a constructor function that adds elements to dom
  function validate() {
    var userName = document.getElementById("username").value;
    var rol = document.getElementById("rol").value;
    var estado = document.getElementById("estado").value;
    if (userName == "") {
        formValidation = false;
        alert("Nombre de usuario vacio...");
    }
    if (rol == "Escoja Rol") {
        formValidation = false;
        alert("Favor escoger rol...");
    }
    if (estado == "Escoja Estado") {
        formValidation = false;
        alert("Favor escoger Estado...");
    }
    if (userName != "" && rol != "Escoja Rol" && estado != "Escoja Estado") {
        formValidation = true;
    }
    if (formValidation) {
        addElement();
    }
}
  function addElement(){
    var e = document.createElement('tr');
    e.id = "row"+counter;
    //create new element
    let row =
    `<th id="usernameRow${counter}">${userName}</th>`+
    `<th id="rolRow${counter}">${rol}</th>`+
    `<th id="estadoRow${counter}">${estado}</th>`+
    `<th id="idRow${counter}" style="visibility:hidden;">${counter}</th>`+
    `<th>`+
    `    <button id="deleteRow${counter}" onClick="erase(${counter})">`+
    `        <i class="fas fa-user-minus"></i>`+
    `    </button>`+
    `</th>`;
    //give it some content
    e.innerHTML = row;
    table.append(e); //add the text node to the newly created div. 
    //add id to current element
    //table.id = "new";
    counter++;
    // add the newly created element and its content into the DOM 
    console.log("Usuario Añadido!");
    clean();
  }
  //initialize function
  validate();
});