const Enums = require("../models/enums");
const db = require('../config/db');

const options = {
    projection: {
        _id: 0,
        id: 1,
        name: 1,
        description: 1,
        total_players: 1,
        prize: 1,
        has_prize: 1,
        lane_size: 1,
        status: 1,
        levels: 1,
        questions: 1
    }};

class Race {

    async getRaceById(pId){
        const query = { id: pId.toString() };
        const race = await db.findOne("races", query, options);
        return { race };
    }
    
    async getAllRaces(){
        return await db.find("races", options);
    }

    async insertRace(pRace){
        const race = new Race();
        race.id = pRace.id.toString();
        race.name = pRace.name;
        race.description = pRace.description;
        race.total_players = pRace.total_players;
        race.prize = pRace.prize;
        race.has_prize = pRace.has_prize;
        race.lane_size = pRace.lane_size;
        race.status = Enums.READY.description;
        race.questions = pRace.questions;
        race._id = await db.insertOne("races", race);
        return { race };
    }

    async updateRace(pId, pRace){
        const filter = { id: pId.toString() };
        await db.updateOne("races", filter, pRace);
        return {pRace};
    }

    async deleteRace(pId){
        const filter = { id : pId.toString() };
        const result = await db.deleteOne("races", filter);
        return {result};
    }
}

module.exports = new Race();