const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round')

class Game {
  constructor() {
    this.currentRound = null;
  }

  start(){
    // creates cards from data.js
    const cards = prototypeQuestions.map((item) => {
      return new Card(item.id, item.question, item.answers, item.correctAnswer)
    });
    console.log(cards)
    // puts those cards in a deck
    const deck = new Deck(cards)
    // creates a new round using the deck
    const round = new Round(deck)
    this.currentRound = round;
    // invokes print message to display the message in the CLI
    this.printMessage(deck, round)
    // invokes print quesiton to kick off our helper functions that allow interaction via the CLI
    this.printQuestion(round)
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
