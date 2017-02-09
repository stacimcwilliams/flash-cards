import Card from './card'

class Deck {
  constructor(cards){
    this.cards = cards;
  }
  count() {
    return this.cards.length;
  }
}

export default Deck
