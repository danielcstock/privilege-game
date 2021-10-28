class Level {
    createLevel(pLevel) {
        const l = this.insertLevel(pLevel);
        console.log("Level created.")
        return l;
    }

    getLevel(pId){
        const id = pId;
        const boundary = 30;
        const name = 5;
        const race = 1;
        return { id, boundary, name, race };
    }

    insertLevel(pLevel){
        const id = 1;
        const boundary = pLevel.boundary;
        const name = pLevel.name;
        const race = pLevel.race;
        return {id, boundary, name, race};
    }

    selectLevel(pLevel){

    }
}

module.exports = new Level();