const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard())
    const feedback = turn.giveFeedback();
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard().id)
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

  endRound() {
    console.log(`**Round Over** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;
