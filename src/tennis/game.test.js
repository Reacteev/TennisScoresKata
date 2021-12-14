import Game from "./game";

describe("game", () => {
  it("starts at zero", () => {
    const game = new Game();
    expect(game.score).toBe("0 - 0");
  });

  it("first point scores 15", () => {
    const game = new Game();
    expect(game.player1Mark().score).toBe("15 - 0");
  });

  it("second point scores 30", () => {
    const game = new Game().player1Mark().player1Mark();
    expect(game.score).toBe("30 - 0");
  });

  it("third point scores 40", () => {
    const game = new Game().player1Mark().player1Mark().player1Mark();
    expect(game.score).toBe("40 - 0");
  });
});
