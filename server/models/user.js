const db = require('../config/db');

class User {
    getUsersOptions() {
        return {
            projection: {
                _id: 0,
                username: 1,
                password: 1
            },
        };
    }

    async getUserByUsername(pUsername){
        const query = { username: pUsername };
        const user = await db.findOne("users", query, this.getUsersOptions());
        return { user };
    }
}

module.exports = new User();