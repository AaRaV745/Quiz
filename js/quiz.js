class Quiz {

    constructor(){


    }



    getState(){
        var gamwStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
              gameState = data.val();
        })
    }

    update(state){
         database.ref('/').update({
            gameState: state
        });
    }


    async start(){
         if(gameState === 0){
                contestant = new Contestant();
                var contestantCountRef = await database.ref('contestCount').once("value");
                if(contestantCountRef.exists()){
                    contestantCount = contestantCountRef.val();
                    contestant.getCount();
                 }

                 question = new Question();
                 question.display();


         }

}

play(){


    question.hide();
    background("yellow");
    fill(0);
    textSize(30);
    text("WINNER!!",340,65)
    text("----------",320,65);
    Contestant.getPlayerInfo();
    if(allContestants != undefined){
        debugger;
        var displayAnswers = 230
        fill("blue");
        textSize(20);
    }


    for (var plr in allContestants){
         debugger;
         var correctAns = "1";
         if(correctAns === allContestants [plr].answer ){
            fill("green");
         }

         else{
             fill("red");
         }

         displayAnswers += 30;
         textSize(20);
         text(allContestants[plr].name + ":  " + allContestants[plr].answer, 250 ,displayAnswers);


    }



}





}



