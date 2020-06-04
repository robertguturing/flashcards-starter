const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  it('returns the current card', function() {
    const card = new Card(1, 'What is the meaning of life?', ['Stuff', 42], 42);
    const deck = new Deck([card]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card);
  });

  it('returns the number of turns', function() {
    const card = new Card(1, 'What is the meaning of life?', ['Stuff', 42], 42);
    const deck = new Deck([card]);
    const round = new Round(deck);
    expect(round.turns).to.equal(0);
  });

  describe('taking a turn', function() {
    beforeEach(function() {
      const card1 = new Card(1, 'What is the meaning of life?', ['Stuff', 42], 42);
      const card2 = new Card(100, '2 +2 is?', [4,5], 4);
      const deck = new Deck([card1, card2]);
      this.card2 = card2;
      this.round = new Round(deck);
    });

    it('returns feedback based off guess', function(){
      expect(this.round.takeTurn(42)).to.equal('correct!')
    });

    it('returns the number of turns', function(){
      this.round.takeTurn(42);
      expect(this.round.turns).to.equal(1);
    });

    it('moves the current card after taking a turn', function() {
      this.round.takeTurn('bleh');
      expect(this.round.returnCurrentCard()).to.equal(this.card2);
    });

    it('stores incorrect guesses', function() {
      this.round.takeTurn('poop');
      expect(this.round.incorrectGuesses).to.deep.equal([1]);
    });

    it('can calculate percent corrrect', function(){
      this.round.takeTurn('lame wrong answer')
      this.round.takeTurn(4)
      expect(this.round.calculatePercentCorrect()).to.equal(50)
    });
  });
});
