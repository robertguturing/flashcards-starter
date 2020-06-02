const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  it('can count the cards', function(){
    const card1 = new Card(1, 'How much wood?', [1,2,3], 1);
    const card2 = new Card(2, 'How many shells, seashore?', [1,2,3], 1);
    const deck = new Deck([card1, card2]);
    expect(deck.countCards()).to.equal(2);
  });
});
