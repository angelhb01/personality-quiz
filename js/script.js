console.log("script.js connected!");

// Toggle button fill to track answers
let blocks = document.querySelectorAll('.question-block');


blocks.forEach((block) => {
    let btns = block.querySelectorAll('.answer-btn');

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            btns.forEach((b) => b.classList.remove('selected'));
            btn.classList.add('selected');
        })
    })
})

