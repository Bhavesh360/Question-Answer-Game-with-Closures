//GAME answering the write questions. 
//open Console to see the questions.
//the answer has to me 0 , 1 or 2 and exit if you want to exit. 

(function(){
    
    function Question (ques, ans , correct) {
    this.ques = ques;
    this.ans = ans;
    this.correct = correct;
}

Question.prototype.DisplayQuestion =
function(){
    console.log(this.ques);
     for (var i=0; i< this.ans.length; i++){
        console.log(this.ans[i]);
    }
}
//var score = 0;
Question.prototype.promptWindow= function(answer, callback){
    var sc;
    if( answer === this.correct){
        //score= score+1;
        console.log("your answer is correct");
        sc= callback(true);
        
//        console.log(score);
//        console.log("----------------");
        
    }
    
    else {
        //score=score-1;
        console.log("wrong answer");
//        console.log(score);
//        console.log("---------------");
        sc= callback(false);
    }
     this.displayScore(sc);
}

Question.prototype.displayScore = function(score) {
    console.log('your current score is: ' + score);
    console.log('-------------------');
}

var ans1= [ '0. Blue' , '1. Green', '2. Orange' ];
var Question1= new Question("what is your fav color?", ans1, 2);
var Question2 = new Question("what is your fav language?", ['0. Java', '1.C++ ' , '2. Python'] , 1);
var Question3 = new Question ( "what is the name of the programmer? ", ['0. Bhavesh', '1. John', '2. Jonathan'], 0);

var questionArr = [Question1, Question2, Question3];

function score() {
    var sc = 0; 
    return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
    }
}

var keepScore = score();
    
function Repeat(){
    var n = Math.floor(Math.random()*questionArr.length);

    questionArr[n].DisplayQuestion();
    
    var answer= prompt('what is your answer?');
    if (answer!== "exit"){
        questionArr[n].promptWindow(parseInt(answer), keepScore);
        Repeat();
    }
    
}
Repeat();
    
})();

