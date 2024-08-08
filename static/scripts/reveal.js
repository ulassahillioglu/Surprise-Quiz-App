function revealHint(key) {
    var answer = document.getElementById(key);
    var hint = document.getElementById("hint");
    
    // Check if the text content of the element with ID equal to the key is not equal to "299"
    if (answer.innerText !== "299") {
        hint.innerHTML = "The Call Of Cthulhu";
    }
}
