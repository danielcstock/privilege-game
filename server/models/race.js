const db = require('../config/db');
const Level = require('./level');
const ObjectId = require("mongodb").ObjectId;

class Race {
    async getRaceById(pId){
        const query = { _id: ObjectId(pId) };
        const options = {
            projection: { _id: 1, name: 1, description: 1, total_players: 1, prize: 1, has_prize: 1, lane_size: 1, levels: 1 },
        };
        const race = await db.findOne("races", query, options);
        return {race};
    }

    async insertRace(pRace){
        const race = new Race();
        const level_1 = Level.getLevel(1);
        const level_2 = Level.getLevel(2);
        race.name = pRace.name;
        race.description = pRace.description;
        race.total_players = pRace.total_players;
        race.prize = pRace.prize;
        race.has_prize = pRace.has_prize;
        race.lane_size = pRace.lane_size;
        race.levels = [level_1, level_2];
        race._id = await db.insertOne("races", race);
        return { race };
    }

    async updateRace(pId, pRace){
        const filter = { _id: ObjectId(pId) };
        await db.updateOne("races", filter, pRace);
        return {pRace};
    }

    async deleteRace(pId){
        const filter = { _id: ObjectId(pId) };
        const result = await db.deleteOne("races", filter);
        return {result};
    }
}

module.exports = new Race();