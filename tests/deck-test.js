import { assert, expect} from 'chai';

import Deck from '../scripts/deck'
import Card from '../scripts/card'

describe('deck', function() {

  it('should be a function', function() {
    assert.isFunction(Deck);
  });

  it('should store cards in the deck', function() {
    let card1 = new Card("What is the capital of Alaska?", "Juneau")
    let card2 = new Card("The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", "Mars")
    let card3 = new Card("Describe in words the exact direction that is 697.5° clockwise from due north?", "North north west")
    let deck = new Deck([card1, card2, card3]);
    assert.deepEqual(deck.cards, [card1,card2,card3]);
  });

  it('should be able to return the length of the deck', function() {
    let card1 = new Card("What is the capital of Alaska?", "Juneau")
    let card2 = new Card("The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", "Mars")
    let card3 = new Card("Describe in words the exact direction that is 697.5° clockwise from due north?", "North north west")
    let deck = new Deck([card1, card2, card3])
    assert.equal(deck.count(), 3)
  });

})
