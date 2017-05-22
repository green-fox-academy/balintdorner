var TennisGame1 = function(playerOne, playerTwo) {
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1") {
        this.playerOneScore += 1;
    } else {
        this.playerTwoScore += 1;
    };
};

TennisGame1.prototype.getScore = function() {
    this.scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];
    this.result = '';
    if (this.playerOneScore < 4 && this.playerTwoScore < 4 && this.playerOneScore !== this.playerTwoScore) {
        this.result = this.scoreNames[this.playerOneScore] + '-' + this.scoreNames[this.playerTwoScore];
    } else if (this.playerOneScore + this.playerTwoScore >= 6 && this.playerOneScore ===
        this.playerTwoScore) {
        this.result = 'Deuce';
    } else if (this.playerOneScore >= 4 || this.playerTwoScore >= 4) {
        this.AdvantagePlayer = this.playerOneScore - this.playerTwoScore;
        if (this.AdvantagePlayer === 1) {
            this.result = "Advantage player1";
        } else if (this.AdvantagePlayer === -1) {
            this.result = "Advantage player2";
        } else if (this.AdvantagePlayer >= 2) {
            this.result = "Win for player1";
        } else {
            this.result = "Win for player2";
        }
    } else {
    this.result = this.scoreNames[this.playerOneScore] + "-All";
    };
    return this.result
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
