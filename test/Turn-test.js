const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  it('should store a guess', function(){
    const card = new Card(1, 'What is Will\'s favorite animal', ['pug', 'doodle'], 'pug');
    const turn = new Turn('pug', card);
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should return the card associated with the guess', function() {
    const card = new Card(1, 'What is Will\'s favorite animal', ['pug', 'doodle'], 'pug');
    const turn = new Turn('pug', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should return true if guess is correct', function(){
    const card = new Card(1, 'What is Will\'s favorite animal', ['pug', 'doodle'], 'pug');
    const turn = new Turn('pug', card);
    expect(turn.evaluateGuess()).to.be.true;
  });

  it('should return false if guess if incorrect', function(){
    const card = new Card(1, 'What is 2+2', [4,5], 4);
    const turn = new Turn(5, card);
    expect(turn.evaluateGuess()).to.be.false;
  });

  it('gives feedback incorrect if wrong guess', function(){
    const card = new Card(1, 'What is 2+2', [4,5], 4);
    const turn = new Turn(5, card);
    expect(turn.giveFeedback()).to.equal('incorrect!')
  });

  it('gives feedback correct if right guess', function(){
    const card = new Card(1, 'What is 2+2', [4,5], 4);
    const turn = new Turn(4, card);
    expect(turn.giveFeedback()).to.equal('correct!')
  });
});
