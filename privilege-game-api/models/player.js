const db = require('../config/db');
const ObjectId = require("mongodb").ObjectId;

class Player {
    createPlayer(pPlayer) {
        return this.insertPlayer(pPlayer);
    }

    async getPlayerById(pId){

        const query = { _id: ObjectId(pId) };
        const options = {
            projection: { _id: 1, email: 1, occupation: 1, skin_tone: 1, gender: 1, manager: 1 },
        };
        const player = await db.findAll("players", query, options);
        return {player};
    }

    async insertPlayer(pPlayer){
        const player = new Player();
        player.email = pPlayer.email;
        player.occupation = pPlayer.occupation;
        player.manager = pPlayer.manager;
        player.skin_tone = pPlayer.skin_tone;
        player.gender = pPlayer.gender;
        player.score = 0;
        player._id = await db.insertOne("players", player);
        return {player};
    }
}

module.exports = new Player();