class Level {
    createLevel(pLevel) {
        const l = this.insertLevel(pLevel);
        console.log("Level created.")
        return l;
    }

    getLevel(pId){
        const id = pId;
        const boundary = 30;
        const name = "Level 1";
        return { id, boundary, name };
    }

    insertLevel(pLevel){
        const id = 1;
        const boundary = pLevel.boundary;
        const name = pLevel.name;
        return {id, boundary, name };
    }
}

module.exports = new Level();