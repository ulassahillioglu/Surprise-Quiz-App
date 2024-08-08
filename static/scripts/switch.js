var gateAnswers = [
    { id: "1", correctAnswer: "carlsberg", hint: "Çıtçıt" },
    { id: "2", correctAnswer: "tom riddle", hint: "İlk İmza" },
    { id: "3", correctAnswer: "nika", hint: "No:96" },
    { id: "4", correctAnswer: "red john", hint: "1997" },
    { id: "5", correctAnswer: "arı", hint: "23" }
];
function openGate(placeId) {
    var answerInput = document.getElementById(placeId);
    var answer = answerInput ? answerInput.value.trim().toLowerCase() : '';
    var hintElement = document.getElementById("hint" + placeId);
    var gateAnswer = gateAnswers.find(function (a) { return a.id === placeId; });
    if (!gateAnswer) {
        alert("Invalid Request. Please try again.");
        return;
    }
    if (answer === gateAnswer.correctAnswer) {
        if (hintElement) {
            hintElement.innerHTML = "\u0130pucu: <button class=\"btn btn-outline-light btn-sm\">".concat(gateAnswer.hint, "</button>");
            hintElement.classList.add("badge", "text-bg-success");
        }
    }
    else {
        alert("Try again");
    }
}
