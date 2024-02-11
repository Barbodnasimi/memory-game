const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
let resetBtn = document.querySelector('button');

function flipCard(e) {
  let card = e.currentTarget;
  let cardBackface = card.querySelector('.back-face')

  // if (card.id === firstCard.id) return;

  if (!hasFlippedCard) {
    // First card flipped
    hasFlippedCard = true;
    firstCard = card;
    cardBackface.textContent = cardBackface.id;
  } else {
    // Second card flipped
    secondCard = card;
    cardBackface.textContent = cardBackface.id;
    checkForMatch();
  }
}


function checkForMatch() {
  let isMatch = firstCard.querySelector('.back-face').id === secondCard.querySelector('.back-face').id;
  if (isMatch) {
    disableCards()
  } else {
    setTimeout(unflipCards, 1000);
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  let firstCardBackface = firstCard.querySelector('.back-face'),
  secondCardBackface = secondCard.querySelector('.back-face');
  
  // Reset text content to back face
  firstCardBackface.textContent = firstCardBackface.title;
  secondCardBackface.textContent = secondCardBackface.title;
  resetBoard();
}

function resetBoard() {
  hasFlippedCard = false;
  firstCard = null;
  secondCard = null;
}

// Define the event listener function
// function cardClickListener(e) {
//     flipCard(e.target);
// }

cards.forEach(card => card.addEventListener('click', flipCard));

// resetBtn.addEventListener("click" , ()=>{
//     resetBoard()
//     undisableCards()
// })
