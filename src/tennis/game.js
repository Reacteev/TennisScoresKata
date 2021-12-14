class Game {
  constructor(player1Score, player2Score) {
    this._player1Score = player1Score || 0;
    this._player2Score = player2Score || 0;
  }

  get player1Score() {
    return this._player1Score;
  }

  get player2Score() {
    return this._player2Score;
  }

  get score() {
    return `${this.player1Score} - ${this.player2Score}`;
  }

  player1Mark() {
    if (this._player1Score === 30) {
      return new Game(40, 0);
    } else {
      return new Game(this._player1Score + 15, 0);
    }
  }

  player2Mark() {
    return new Game();
  }
}

export default Game;
