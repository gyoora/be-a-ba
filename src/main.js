import { game } from "./game";

const newGameButtonElem = document.getElementById('new-game');
newGameButtonElem.addEventListener('click', function() {
    game.newGame();

    const lettersElem = document.querySelectorAll('.square');

    for (let i = 0; i < lettersElem.length; i++) {
        lettersElem[i].innerHTML = game.letters[i].toUpperCase();
    }

})