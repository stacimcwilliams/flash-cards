import Deck from './deck'
import Guess from './guess'
import Card from './card'

class Round {
  constructor(deck) {
    this.deck = deck;
    this.guesses = [];
    this.count = 0;
  }

  currentCard() {
    return this.deck.cards[this.count]
  }

  recordGuess(response){
    var myGuess = new Guess(response,this.deck.cards[this.count])
    this.guesses.push(myGuess)
    this.count ++
  }

  percentCorrect() {
    //num 1/num2 * 100

  }

  count(round) {
    return this.count
  }

  numberCorrect() {
  return this.guesses.filter(function(e,i,a) {
        return e.correct;
    }).length
  }

}

export default Round
