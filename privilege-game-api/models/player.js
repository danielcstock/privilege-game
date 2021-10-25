class Player {
    createPlayer(pPlayer) {
        const p = this.insertPlayer(pPlayer);
        console.log("Player created.")
        return p;
    }

    getPlayer(pId){
        const id = pId;
        const email = 'daniel.stock@unico.io';
        const occupation = 'developer';
        const skin_tone = 5;
        const gender = 3;
        return {id, email, occupation, skin_tone, gender};
    }


    insertPlayer(pPlayer){
        const id = 1;
        const email = pPlayer.email;
        const occupation = pPlayer.occupation;
        const skin_tone = pPlayer.skin_tone;
        const gender = pPlayer.gender;
        return {id, email, occupation, skin_tone, gender};
    }

    selectPlayer(pPlayer){

    }
}

module.exports = new Player();