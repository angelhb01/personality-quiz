console.log("script.js connected!");

// Toggle button fill to track answers
let blocks = document.querySelectorAll('.question-block');

// An object that keeps track of all of the user scores
let scores = {};


// A function that uses a switch case to determine which question was selected and sets the score of the current question.
const results = (result, question) => {
    switch(result) {
        case "A":
            scores[question] = 4;
            break;
        case "B":
            scores[question] = 3;
            break;
        case "C":
            scores[question] = 2;
            break;
        case "D":
            scores[question] = 1;
            break;
    }
}

// A function that displays the result by adding the total
const displayResult = (scores) => {
    let total = 0;
    for (let i = 0; i < Object.keys(scores).length; i++) {
        total += Object.values(scores)[i];
    }

    if (total >= 17 && total <= 20) {
        return [total, "Lion/Eagle"];
    } else if (total >= 13 && total <= 16) {
        return [total, "Owl/Deer"];
    } else if (total >= 9 && total <= 12) {
        return [total, "Dolphin/Fox"];
    } else {
        return [total, "Wolf/Elephant"];
    }
}


// Loops through each block element and loops through each btn element in the block
// A click event is added to keep track of our answers selected
blocks.forEach((block) => {
    let btns = block.querySelectorAll('.answer-btn');

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            btns.forEach((b) => b.classList.remove('selected'));
            btn.classList.add('selected');
            results(btn.getAttribute("data-answer"), block.parentNode.getAttribute('id'));

            console.log(scores)
        })
    })
})

// Show results
let resultsbtn = document.getElementById('show-result');

resultsbtn.onclick = () => {
    if (Object.keys(scores).length === blocks.length) {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('result-container').style.display = 'block';
        
        document.getElementById('result-score').textContent = displayResult(scores)[0];
        document.getElementById('result-animal').textContent = displayResult(scores)[1];

    } else {
        document.getElementById('popup').style.display = 'flex';
    }
};
