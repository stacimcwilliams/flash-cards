import { assert, expect } from 'chai';
import Card from '../scripts/card'

describe('card', function() {

  it('should be a function', function() {
    assert.isFunction(Card);
  });

  it('should have a question', function() {
    let card = new Card({question:'Do you like pie', answer:'Yes!!'});
    assert.equal(card.question, 'Do you like pie')
  });

  it('should have an answer', function() {
    let card = new Card({question:'Do you like pie', answer:'Yes!!'})
    assert.equal(card.answer, 'Yes!!')
  });

});
