const hearthBtn = document.querySelectorAll(".favorite-icon");
/*function cambioDeColor(index) {
    if (!hearthBtn[index].classList.contains("filled")) {
        hearthBtn[index].classList.add("filled");
        hearthBtn[index].innerHTML = "&#10084;";
    } else {
        hearthBtn[index].classList.remove("filled");
        hearthBtn[index].innerHTML = "&#9825;";
    }
    
}*/
hearthBtn.forEach((boton , index) => {
    boton.addEventListener("click", () => {
        if (!hearthBtn[index].classList.contains("filled")) {
            hearthBtn[index].classList.add("filled");
            hearthBtn[index].innerHTML = "&#10084;";
        } else {
            hearthBtn[index].classList.remove("filled");
            hearthBtn[index].innerHTML = "&#9825;";
        }
    });
});






