import Set from "./set";

class Match {
  constructor(sets) {
    this._sets = sets || [new Set()];
    this._currentSet = this._sets.length - 1;
  }

  get sets() {
    return this._sets;
  }

  get currentSet() {
    return this._sets[this._currentSet];
  }

  player1Mark() {
    const newSets = [...this._sets];
    newSets[this._currentSet] = this.currentSet.player1Mark();
    return new Match(newSets);
  }

  player2Mark() {
    const newSets = [...this._sets];
    newSets[this._currentSet] = this.currentSet.player2Mark();
    return new Match(newSets);
  }
}

export default Match;
