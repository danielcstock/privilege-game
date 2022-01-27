const db = require('../config/db');

class Player {
    getPlayersOptions(){
        const options = {
            projection: { _id: 0, id: 1, email: 1, occupation: 1, skin_tone: 1, gender: 1, is_leader: 1, score: 1 },
        };
        return options;
    }

    async getAllPlayers(){
        return await db.findAll("players", this.getPlayersOptions());
    }

    async getPlayerById(pId){
        const query = { id: pId };
        const player = await db.findOne("players", query, this.getPlayersOptions());
        return {player};
    }

    async getPlayersBySkinTone(pSkinTone){
        const query = { skin_tone: parseInt(pSkinTone) };
        return await db.find("players", query, this.getPlayersOptions());
    }

    async getPlayersByOccupation(pOccupation){
        const query = { occupation: pOccupation};
        return await db.find("players", query, this.getPlayersOptions());
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