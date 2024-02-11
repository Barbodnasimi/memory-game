const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let firstCard, secondCard;
let resetBtn = document.querySelector('button');

function flipCard(card) {
    if (card === firstCard) return;

    if (!hasFlippedCard) {
        // First card flipped
        hasFlippedCard = true; 
        firstCard = card; 
        firstCard.textContent = card.id;
        console.log(card.id + '1');
        return;
    }
    // Second card flipped
    secondCard = card;
    secondCard.textContent = card.id;
    console.log(card.id + '2');
    checkForMatch();
}


function checkForMatch() {
    let isMatch = firstCard.id === secondCard.id;
    if (isMatch) {
        console.log(firstCard , secondCard);
        disableCards()    
        console.log('111111111112');
    } else {
        unflipCards();
        console.log('gsasajkl');
    }
}


function unflipCards() {
    // Reset text content to back face
    firstCard.textContent = firstCard.title;
    secondCard.textContent = secondCard.title;
    resetBoard();
}

function disableCards() {
    console.log(firstCard);
    firstCard.removeEventListener('click', cardClickListener);
    secondCard.removeEventListener('click', cardClickListener);
    resetBoard();
}

function resetBoard() {
    hasFlippedCard = false;
    firstCard = null;
    secondCard = null;
    console.log('reset board');
}

// Define the event listener function
function cardClickListener(e) {
    flipCard(e.target);
}

cards.forEach(card => card.addEventListener('click', cardClickListener));

// resetBtn.addEventListener("click" , ()=>{
//     resetBoard()
//     undisableCards()
// })