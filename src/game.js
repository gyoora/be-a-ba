export const game = {
    letters: [],
    word: "",
    error: false,
    newGame: function(){
        this.letters = [];

        const alphabet = "abcdefghijklmnopkrstuvwxyz";

        //const letter = alphabet[randomIndex];
        
        this.letters = new Array(3).fill().map(function(letter){
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            return alphabet[randomIndex];
        });

        this.word = "";
        this.error = false;

    }
}