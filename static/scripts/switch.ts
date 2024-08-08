interface GateAnswer {
    id: string;
    correctAnswer: string;
    hint: string;
  }
  
  const gateAnswers: GateAnswer[] = [
    { id: "1", correctAnswer: "carlsberg", hint: "Çıtçıt" },
    { id: "2", correctAnswer: "tom riddle", hint: "İlk İmza" },
    { id: "3", correctAnswer: "nika", hint: "No:96" },
    { id: "4", correctAnswer: "red john", hint: "1997" },
    { id: "5", correctAnswer: "arı", hint: "23" }
  ];
  
  function openGate(placeId: string): void {
    const answerInput: HTMLInputElement | null = document.getElementById(placeId) as HTMLInputElement;
    const answer: string = answerInput ? answerInput.value.trim().toLowerCase() : '';
    const hintElement: HTMLElement | null = document.getElementById("hint" + placeId);
  
    const gateAnswer: GateAnswer | undefined = gateAnswers.find(a => a.id === placeId);
  
    if (!gateAnswer) {
      alert("Invalid Request. Please try again.");
      return;
    }
  
    if (answer === gateAnswer.correctAnswer) {
      if (hintElement) {
        hintElement.innerHTML = `İpucu: <button class="btn btn-outline-light btn-sm">${gateAnswer.hint}</button>`;
        hintElement.classList.add("badge", "text-bg-success");
      }
    } else {
      alert("Try again");
    }
  }
  