const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");


textInput.addEventListener("input", () => {
    if (textInput.value.length < 50) {
        charCount.textContent = `Character Count: ${textInput.value.length}/50`;
    }else {
        charCount.textContent = `Character Count: 50/50`
        charCount.style.color = "red";
        textInput.value = textInput.value.slice(0,50);
    }
});