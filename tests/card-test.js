import { assert, expect } from 'chai';
import Card from '../scripts/card';

describe('card', () => {

  it('should be a function', () => {
    assert.isFunction(Card);
  });

  it('should have a question', () => {
    let card = new Card({question:'Do you like pie', answer:'Yes!!'});
    assert.equal(card.question, 'Do you like pie');
  });

  it('should have an answer', () => {
    let card = new Card({question:'Do you like pie', answer:'Yes!!'});
    assert.equal(card.answer, 'Yes!!');
  });

});
