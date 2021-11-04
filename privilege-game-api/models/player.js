const Score = require('../models/score');
const db = require('../config/db');

class Player {
    createPlayer(pPlayer) {
        const p = this.insertPlayer(pPlayer);
        console.log("Player created.")
        return p;
    }

    async getPlayer(pId){
        const query = { id: pId };
        const options = {
            sort: { "id": -1 },
            projection: { _id: 0, id: 1, email: 1, occupation: 1, skin_tone: 1, gender: 1, manager: 1 },
        };
        const player = await db.findAll("players", query, options);
        return {player};
    }


    insertPlayer(pPlayer){
        const id = 1;
        const email = pPlayer.email;
        const occupation = pPlayer.occupation;
        const manager = pPlayer.manager;
        const skin_tone = pPlayer.skin_tone;
        const gender = pPlayer.gender;
        const score = new Score.createScore({

        });
        return {id, email, occupation, manager, skin_tone, gender, score};
    }
}

module.exports = new Player();