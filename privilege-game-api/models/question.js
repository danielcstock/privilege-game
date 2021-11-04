class Question {
    createQuestion(pQuestion) {
        const q = this.insertQuestion(pQuestion);
        console.log("Question created.")
        return q;
    }

    getQuestion(pId){
        const id = pId;
        const content = 'Did you have both parents when you were a child?';
        const score = 5;
        const type = 1;
        const race_id = 1;
        return { id, content, score, type, race_id };
    }

    insertQuestion(pQuestion){
        const id = 1;
        const content = pQuestion.content;
        const score = pQuestion.score;
        const type = pQuestion.type;
        const race_id = pQuestion.race_id;
        return {id, content, score, type, race_id };
    }

    selectQuestion(pQuestion){

    }
}

module.exports = new Question();