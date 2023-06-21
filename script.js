const inputBox = document.getElementById("input-box");
const listeContainer = document.getElementById("liste-container");
const button = document.querySelector("button");
button.addEventListener("click", AjouterTache )

function AjouterTache() {
    if (inputBox.value === '') {
        alert("Veuillez renseigner une tâche!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value 
        // + ', créée le ' + new Date();
        listeContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span)
    }
    inputBox.value ='';
    saveData();
}
console.log("Le fichier script.js est chargé !");

//Evenement au click
listeContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    }, false);

//sauvegarde de données dans le browser
    function saveData(){
        localStorage.setItem("data", listeContainer.innerHTML);
    }
//
    function taches(){
       listeContainer.innerHTML= localStorage.getItem("data");
    }
    taches()