let menuVisible = false;

function showHideMenu(){
    if (menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true
    }
}
// to hide menu after click
function select(){
    document.getElementById("nav").classList ="";
    menuVisible = false
}

function habilityEffect(){
    let skills = document.getElementById("skills");
    let skillsDistance = window.innerHeight - skills.getBoundingClientRect().top;
    if(skillsDistance >= 300){
        let habilities = document.getElementsByClassName("progress");
        habilities[0].classList.add("javascript");
        habilities[1].classList.add("htmlcss");
        habilities[2].classList.add("python");
        habilities[3].classList.add("sql");
        habilities[4].classList.add("java");
        habilities[5].classList.add("NodeJS");
        habilities[6].classList.add("React");
        habilities[7].classList.add("comunication");
        habilities[8].classList.add("teamwork");
        habilities[9].classList.add("creativity");
        habilities[10].classList.add("dedication");
        habilities[11].classList.add("motivation");
        habilities[12].classList.add("organized");
        habilities[13].classList.add("eager");
    }
}

window.onscroll = function(){
    habilityEffect();
}

function showMessage() {
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("messageSend").style.display = "block";
}

var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function (event) {
    event.preventDefault();  
    showMessage();  
});
    // min 1:46