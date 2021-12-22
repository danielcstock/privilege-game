const db = require('../config/db');
const ObjectId = require("mongodb").ObjectId;

class Player {
    async getPlayerById(pId){
        const query = { id: pId };
        const options = {
            projection: { _id: 0, id: 1, email: 1, occupation: 1, skin_tone: 1, gender: 1, is_leader: 1, score: 1 },
        };
        const player = await db.findOne("players", query, options);
        return {player};
    }

    async getAllPlayers(){
        const options = {
            projection: { _id: 0, id: 1, email: 1, occupation: 1, skin_tone: 1, gender: 1, is_leader: 1, score: 1 },
        };
        return await db.find("players", options);
    }

    async insertPlayer(pPlayer){
        const player = new Player();
        player.id = pPlayer.id;
        player.email = pPlayer.email;
        player.occupation = pPlayer.occupation;
        player.is_leader = pPlayer.is_leader;
        player.skin_tone = pPlayer.skin_tone;
        player.gender = pPlayer.gender;
        player.score = 0;
        player._id = await db.insertOne("players", player);
        return {player};
    }

    async updatePlayer(pId, pPlayer){
        const filter = { id: pId };
        await db.updateOne("players", filter, pPlayer);
        return {pPlayer};
    }

    async deletePlayer(pId){
        const filter = { id: pId };
        const result = await db.deleteOne("players", filter);
        return {result};
    }
}

module.exports = new Player();