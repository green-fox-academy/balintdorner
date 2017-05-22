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
    var currentStanding = "";
    var tempScore = 0;
    if (this.playerOneScore === this.playerTwoScore) {
        switch (this.playerOneScore) {
            case 0:
                currentStanding = "Love-All";
                break;
            case 1:
                currentStanding = "Fifteen-All";
                break;
            case 2:
                currentStanding = "Thirty-All";
                break;
            default:
                currentStanding = "Deuce";
                break;
        }
    } else if (this.playerOneScore >= 4 || this.playerTwoScore >= 4) {
        var getAdvantagePlayer = this.playerOneScore - this.playerTwoScore;
        if (getAdvantagePlayer === 1) {
            currentStanding = "Advantage player1";
        } else if (getAdvantagePlayer === -1) {
            currentStanding = "Advantage player2";
        } else if (getAdvantagePlayer >= 2) {
            currentStanding = "Win for player1";
        } else {
            currentStanding = "Win for player2";
        }
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) {
                tempScore = this.playerOneScore;
            } else {
                currentStanding += "-";
                tempScore = this.playerTwoScore;
            }
            switch (tempScore) {
                case 0:
                    currentStanding += "Love";
                    break;
                case 1:
                    currentStanding += "Fifteen";
                    break;
                case 2:
                    currentStanding += "Thirty";
                    break;
                case 3:
                    currentStanding += "Forty";
                    break;
            }
        }
    }
    return currentStanding;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
