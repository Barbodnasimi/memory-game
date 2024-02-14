const resetBtn = document.querySelector('button');
const cardBox = document.querySelector('.game');
const emojis = ["😊","😊","❤","❤","👌","👌","😎","😎","🤢","🤢","✔","✔","🎁","🎁","🎂","🎂"];


let shufEmojis = emojis.sort(() => (Math.random() > 0.5) ? 1 : -1);

// Function to handle the click event
function classHandler() {
  this.classList.add('boxOpen');

  setTimeout(() => {
    let boxOpen = document.querySelectorAll('.boxOpen');

    if (boxOpen.length > 1) {
      if (boxOpen[0].innerHTML === boxOpen[1].innerHTML) {
        boxOpen.forEach(box => {
          box.classList.add('boxMatch');
          box.classList.remove('boxOpen');
          box.removeEventListener('click', classHandler);
        });

        if (document.querySelectorAll('.boxMatch').length === emojis.length) {
          alert("GG");
        }
      } else {
        boxOpen.forEach(box => {
          box.classList.remove('boxOpen');
        });
      }
    }
  }, 1000);
}

// Create and append the boxes
for (let i = 0; i < shufEmojis.length; i++) {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shufEmojis[i];
  box.addEventListener("click", classHandler);
  cardBox.appendChild(box);
}


resetBtn.addEventListener("click", () => {
  window.location.reload();
});
