const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  it('should store a guess', function(){
    const card = new Card(1, 'What is Will\'s favorite animal', ['pug', 'doodle'], 'pug')
    const turn = new Turn('pug', card);
    expect(turn.returnGuess()).to.equal('pug')
  });
});
