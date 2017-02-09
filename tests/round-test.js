import { assert } from 'chai';
import Round from '../scripts/round';
import Card from '../scripts/card';
import Deck from '../scripts/deck';

describe('round', () => {

  it('should be a function', () => {
    assert.isFunction(Round);
  });

  it('it should have an attribute of deck', () => {
    let card1 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"});
    let card2 = new Card({question:"Approximately how many miles are in one astronomical unit?", answer: "93,000,000"});
    let deck  = new Deck([card1, card2]);
    let round = new Round(deck);
    assert(round.deck instanceof Deck, "I didn't get a deck");
  });

  it('should have guesses', () => {
    let card1 = new Card("What is the capital of Alaska?", "Juneau");
    let card2 = new Card("Approximately how many miles are in one astronomical unit?", "93,000,000");
    let deck  = new Deck([card1, card2]);
    let round = new Round(deck);
    assert.deepEqual(round.guesses, []);
  });

  it('when you record a guess your array should have a new element', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer:"Juneau"});
    let deck  = new Deck([card1]);
    let round = new Round(deck);
    round.recordGuess("Juneau");
    assert.deepEqual(round.guesses.length, 1);
  });

  it('should return the count when you add a guess', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer:"Juneau"});
    let card2 = new Card({question:"Approximately how many miles are in one astronomical unit?", answer:"93,000,000"});
    let deck  = new Deck([card1, card2]);
    let round = new Round(deck);
    round.recordGuess("Juneau");
    assert.equal(round.count, 1);
  });

  it('should return the number of correct guesses', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer:"Juneau"});
    let card2 = new Card({question:"Approximately how many miles are in one astronomical unit?", answer:"93,000,000"});
    let deck  = new Deck([card1, card2]);
    let round = new Round(deck);
    round.recordGuess("North");
    round.recordGuess("82,000");
    round.guesses[0].feedback();
    assert.equal(round.numberCorrect(), 0 );
  });

  it('should return the currrent card', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer:"Juneau"});
    let card2 = new Card({question:"Approximately how many miles are in one astronomical unit?", answer:"93,000,000"});
    let deck  = new Deck([card1, card2]);
    let round = new Round(deck);
    assert.equal(round.currentCard(), card1);
  });

  it('should return the percent correct', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer:"Juneau"});
    let card2 = new Card({question:"Approximately how many miles are in one astronomical unit?", answer:"93,000,000"});
    let deck  = new Deck([card1, card2]);
    let round = new Round(deck);
    round.recordGuess("Juneau");
    round.recordGuess("82,000");
    assert.equal(round.percentCorrect(), 50 );
  });


});
