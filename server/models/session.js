const db = require('../config/db');

const options = {
    projection: {
        _id: 0,
        id: 1,
        name: 1,
        description: 0,
        total_players: 1,
        prize: 0,
        has_prize: 0,
        lane_size: 1,
        status: 1,
        levels: 0,
        questions: 1
    }};

class Session {
    async getSessionById(pId){
        const query = { id: pId.toString() };
        const session = await db.findOne("races", query, options);
        return { session };
    }

    async getAllSessions(){
        return await db.findAll("races", options);
    }

    async updateSession(pId, pSession){
        const filter = { id: pId.toString() };
        await db.updateOne("races", filter, pSession);
        return {pSession};
    }
}

module.exports = new Session();