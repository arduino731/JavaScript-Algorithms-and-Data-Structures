function populate(){
    if(quiz.isEnded()){
        showScores();
    }else{
        // show question
        var element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i= 0; i < choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};


function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
}

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = " question " + currentQuestionNumber + "of " + quiz.questions.length; 
}

function showScores(){
    var gameOverHtml = "<h1> Result </h1>";
    gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById('quiz');
    element.innerHTML= gameOverHtml;

}

var questions = [
    new Question("Which one is not an OOP language?", ["Java", "C#", "C", "C++"], "C"),
    new Question("Which language is used for stying web pages", ['HTML', 'CSS', 'JQUERY', 'XML'], 'CSS'),
    new Question("There are ____ main components of object oriented programming.", ['1', '3', '4', '6'], '4'),
    new Question("Which language is used for web apps?", ['PHP', 'JavaScript', 'ALL', 'Python'], 'ALL'),
    new Question("MVC is a ____", ['Framework', 'Library', 'Language', 'all'], 'Framework')

];

var quiz = new Quiz(questions);

populate();