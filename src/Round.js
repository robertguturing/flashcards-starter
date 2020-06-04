const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  currentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard())
    const feedback = turn.giveFeedback();
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard().id)
    }
    this.turns += 1;
    return feedback;
  }

  calculatePercentCorrect() {
    return Math.floor(this.corrrectGuesses()/this.turns * 100);
  }

  corrrectGuesses() {
    return this.turns - this.incorrectGuesses.length
  }
}

module.exports = Round;
