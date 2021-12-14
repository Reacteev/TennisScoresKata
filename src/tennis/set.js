import Game from "./game";

class Set {
  constructor(games) {
    this._games = games || [new Game()];
    this._currentGame = this._games.length - 1;
  }

  get games() {
    return this._games;
  }

  get currentGame() {
    return this._games[this._currentGame];
  }

  get player1Score() {
    return 0;
  }

  get player2Score() {
    return 0;
  }

  player1Mark() {
    const newGames = [...this._games];
    newGames[this._currentGame] = this.currentGame.player1Mark();
    return new Set(newGames);
  }

  player2Mark() {
    const newGames = [...this._games];
    newGames[this._currentGame] = this.currentGame.player2Mark();
    return new Set(newGames);
  }
}

export default Set;
