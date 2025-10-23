console.log("script.js connected!");

// Toggle button fill to track answers
let blocks = document.querySelectorAll('.question-block');

let scores = {
    "question-1": 0,
    "question-2": 0,
    "question-3": 0,
    "question-4": 0,
    "question-5": 0
}


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
    console.log(scores);
}

blocks.forEach((block) => {
    let btns = block.querySelectorAll('.answer-btn');

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            btns.forEach((b) => b.classList.remove('selected'));
            btn.classList.add('selected');
            results(btn.getAttribute("data-answer"), block.parentNode.getAttribute('id'));
        })
    })
})
