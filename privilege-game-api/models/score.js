class Score {
    createScore(pScore) {
        const s = this.insertScore(pScore);
        console.log("Score created.")
        return s;
    }

    getScoreByPlayerId(pPlayerId){
        const id = 1;
        const score_points = 40;
        const player_id = pPlayerId;
        const race_id = 1;
        return { id, score_points, player_id, race_id };
    }

    insertScore(pScore){
        const id = 10;
        const points = pScore.points;
        const player_id = pScore.player_id;
        const race_id = pScore.race_id;
        return { id, points, player_id, race_id };
    }

    updateScore(pScore){
        const id = pScore.id == null ? 1 : pScore.id;
        const points = pScore.points;
        const player_id = pScore.player_id;
        const race_id = pScore.race_id;
        return { id, points, player_id, race_id };
    }

    selectScore(pScore){    }
}

module.exports = new Score();