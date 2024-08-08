var gateAnswers = [
    { id: "1", correctAnswer: "", hint: "" },
    { id: "2", correctAnswer: "", hint: "" },
    { id: "3", correctAnswer: "", hint: "" },
    { id: "4", correctAnswer: "", hint: "" },
    { id: "5", correctAnswer: "", hint: "" }
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
