class Question {

    constructor() {
    this.title = createElement('h1');
    this.input1 = createInput (" ENTER YOUR NAME HERE");
    this.input2 = createInput ("ENTER YOUR OPTION #")
    this.button  = createBUtton('submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');

    }



    hide(){
this.title.hide();
this.input1.hide();
this.button.hide();
this.input2.hide();
    }


            display(){
                this.title.html("My Quiz Game",350,0);
                this.question.html("what becomes shorter as it gets older",150,80);
                this.option1.html("candle",150,100);
                this.option2.html("people",150,120);
                this.option3.html("grass",150,140);
                this.option4.html("rainbow",150,160);

                this.input1.position(150,230);
                this.input.position(350, 230);
                this.button.position(290,300);

                    this.button.mousePressed(()=>{

                    this.title.hide();
                    this.input1.hide();
                    this.input2.hide();
                    this.button.hide();

                    contestant.name = this.input1.value();
                    contestant.answer = this.input2.value();
                    contestantCount = contestantCount + 1;
                    contestant.index = contestantCount;
                    contestant.update();
                    contestant.updateCount(contestantCount);
                        









                    })







            }






}