
import { assert, expect } from 'chai';


import Card from '../scripts/card'
import Guess from '../scripts/guess'
import Deck from '../scripts/deck'
import Round from '../scripts/round'

describe('guess', function() {

  it('should be a function', function() {
    assert.isFunction(Guess);
  });
//
  it('should return correct when the guess matches the answer', function() {
    var myCard = new Card({question:'What color is the sky?', answer: 'blue'});
    var myGuess = new Guess('blue', myCard);
    (myGuess.feedback(), 'Correct!');
  });

  it('should return incorrect when the guess does not match the answer', function() {
    var myCard = new Card({question:'What color is the sky?', answer: 'blue'});
    var myGuess = new Guess('black', myCard);
    assert.equal(myGuess.feedback(), 'Incorrect.');
  });

  it('should return an answer', function() {
    var myCard = new Card({question:'What color is the sky?', answer: 'blue'});
    var myGuess = new Guess('red', myCard);
    assert.equal(myGuess.response, 'red' );
  });

  it('if the answer is correct this.correct should return true', function() {
    var myCard = new Card({question:'What color is the sky?', answer: 'blue'});
    var myGuess = new Guess('blue', myCard);
    assert.equal(myGuess.correct, true);
  });

  it('if the answer is incorrect this.correct should return false', function() {
    var myCard = new Card({question:'What color is the sky?', answer: 'blue'});
    var myGuess = new Guess('red', myCard);
    assert.equal(myGuess.correct, false);
  });
//
})
