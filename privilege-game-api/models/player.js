const db = require('../config/db');
const ObjectId = require("mongodb").ObjectId;

class Player {
    createPlayer(pPlayer) {
        return this.insertPlayer(pPlayer);
    }

    async getPlayerById(pId){
        const query = { _id: ObjectId(pId) };
        const options = {
            projection: { _id: 1, email: 1, occupation: 1, skin_tone: 1, gender: 1, manager: 1, score: 1 },
        };
        const player = await db.findOne("players", query, options);
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

    async updatePlayer(pId, pPlayer){
        const filter = { _id: ObjectId(pId) };
        await db.updateOne("players", filter, pPlayer);
        return {pPlayer};
    }

    async deletePlayer(pId){
        const filter = { _id: ObjectId(pId) };
        const result = await db.deleteOne("players", filter);
        return {result};
    }
}

module.exports = new Player();