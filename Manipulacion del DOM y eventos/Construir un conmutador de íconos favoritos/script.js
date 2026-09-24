const hearthBtn = document.querySelectorAll(".favorite-icon");


function cambioDeColor(num) {
    if (!hearthBtn[num].classList.contains("filled")) {
        hearthBtn[num].classList.add("filled");
        hearthBtn[num].innerHTML = "&#10084;";
        console.log("activada");
    } else {
        hearthBtn[num].classList.remove("filled");
        hearthBtn[num].innerHTML = "&#9825;";
        console.log("desctivada");
    }
    
}



for (let i = 0; i < hearthBtn.length; i++) {
    hearthBtn[i].addEventListener("click", () => {cambioDeColor(i)});    
}





