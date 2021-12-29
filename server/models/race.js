const db = require('../config/db');
const ObjectId = require("mongodb").ObjectId;

class Race {
    async getRaceById(pId){
        const query = { id: Number(pId) };
        const options = {
            projection: { name: 1, description: 1, total_players: 1, prize: 1, has_prize: 1, lane_size: 1, levels: 1, questions: 1 },
        };
        const race = await db.findOne("races", query, options);
        return {race};
    }
    
    async getAllRaces(){
        const options = {
            projection: { _id: 0, id: 1, name: 1, description: 1, total_players: 1, lane_size: 1 },
        };
        return await db.find("races", options);
    }

    async insertRace(pRace){
        const race = new Race();
        race.id = pRace.id;
        race.name = pRace.name;
        race.description = pRace.description;
        race.total_players = pRace.total_players;
        race.prize = pRace.prize;
        race.has_prize = pRace.has_prize;
        race.lane_size = pRace.lane_size;
        race.levels = pRace.levels;
        race.questions = pRace.questions;
        race._id = await db.insertOne("races", race);
        return { race };
    }

    async updateRace(pId, pRace){
        const filter = { id: Number(pId) };
        await db.updateOne("races", filter, pRace);
        return {pRace};
    }

    async deleteRace(pId){
        const filter = { id : Number(pId) };
        const result = await db.deleteOne("races", filter);
        return {result};
    }
}

module.exports = new Race();