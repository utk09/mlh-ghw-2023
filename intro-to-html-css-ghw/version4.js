function checkAnswer(questionNumber) {
  if (questionNumber === 1) {
    const answer = document.getElementById("q1-answer")?.value;
    if (answer === "12") {
      document.getElementById("q1-result").innerHTML =
        '<span class="correct">Correct!</span>';
    } else {
      document.getElementById("q1-result").innerHTML =
        '<span class="incorrect">Incorrect, the correct answer is 12.';
    }
  } else if (questionNumber === 2) {
    const answer = document.querySelector('input[name="q2"]:checked')?.value;
    if (answer === "a") {
      document.getElementById("q2-result").innerHTML =
        '<span class="correct">Correct!</span>';
    } else {
      document.getElementById("q2-result").innerHTML =
        '<span class="incorrect">Incorrect, the correct answer is a.';
    }
  } else if (questionNumber === 3) {
    const answer = document.getElementById("q3-answer")?.value;
    if (answer?.toLowerCase() === "triangle") {
      document.getElementById("q3-result").innerHTML =
        '<span class="correct">Correct!</span>';
    } else {
      document.getElementById("q3-result").innerHTML =
        '<span class="incorrect">Incorrect, the correct answer is Triangle.';
    }
  } else if (questionNumber === 4) {
    const answer = document.querySelector('input[name="q4"]:checked')?.value;
    if (
      answer === "Star Wars" ||
      answer === "Star Trek" ||
      (answer === "Star Wars" && answer === "Star Trek")
    ) {
      document.getElementById("q4-result").innerHTML =
        '<span class="correct">Correct!</span>';
    } else {
      document.getElementById("q4-result").innerHTML =
        '<span class="incorrect">How can you say that!😡 Both are good!</span>';
    }
  } else if (questionNumber === 5) {
    const answer = document.querySelector('input[name="q5"]:checked')?.value;
    if (answer === "b") {
      document.getElementById("q5-result").innerHTML =
        '<span class="correct">Correct!</span>';
    } else {
      document.getElementById("q5-result").innerHTML =
        '<span class="incorrect">Incorrect, the correct answer is 1&rarr;C | 2&rarr;A | 3&rarr;B.</span>';
    }
  }
}
function submitAnswers() {
  checkAnswer(1);
  checkAnswer(2);
  checkAnswer(3);
  checkAnswer(4);
  checkAnswer(5);
}
