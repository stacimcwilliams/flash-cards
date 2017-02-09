import Card from './card'

 class Guess {
  constructor(response, card){
    this.response = response;
    this.card = card;
    this.question = card.question;
    this.answer = card.answer;
    if (this.response === card.answer) {
    this.correct = true
    } else {
    this.correct = false
    }
  }

  feedback() {
    return this.correct ? "Correct!" : "Incorrect."
  }
}

export default Guess
