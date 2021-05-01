const answersArray = document.querySelectorAll('.answers');
const button = document.querySelector('#check');
const result = document.querySelector('#result');

function checkAnswers() {

    let correctAnswers = 0;
    let userAnswer = "";
    const answersArrayLength = answersArray.length;

    for (let i = 0; i < answersArrayLength; i++) {

        const element = answersArray[i];
        userAnswer = element.querySelector(`input[name=question${i}]:checked`);

        if(userAnswer == null) {
            console.log("No option chosen!");
            continue;
        }

        userAnswer = userAnswer.value;

        if(userAnswer == "true") {
            correctAnswers++;
            console.log("Correct Answer chosen!")
        }   else {
            console.log("Incorrect Answer chosen!")
        }

        console.log(i);
        console.log(userAnswer);
        console.log(correctAnswers);
    }

    result.innerHTML = `You answered ${correctAnswers}
                            out of ${answersArrayLength} questions correctly!`;
}

button.addEventListener("click", function() {
        checkAnswers();
    });