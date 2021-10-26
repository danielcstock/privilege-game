class Race {
    createRace(pRace) {
        const r = this.insertRace(pRace);
        console.log("Race created.");
        return r;
    }

    getRace(pId){
        const name = "Privilege Game";
        const description = "Privilege game";
        const total_players = 100;
        const prize = "Prize";
        const has_prize = true;
        const lane_size = 100;

        return { pId, name, description, total_players, prize, has_prize, lane_size };
    }

    insertRace(pRace){
        const id = 1;
        const name = pRace.name;
        const description = pRace.description;
        const total_players = pRace.total_players;
        const prize = pRace.prize;
        const has_prize = pRace.has_prize;
        const lane_size = pRace.lane_size;

        return { id, name, description, total_players, prize, has_prize, lane_size };
    }
}

module.exports = new Race();