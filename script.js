// Initialising variables and answers array
let counter = 1;
let multipleScore = 0;
let freeScore = 0;
let answers = [["chernenko", "konstantin chernenko"], ["kazakh", "kazakhstan", "kazakh republic"], ["1966", "66"], ["jenny", "jenny von westphalen"], ["albania"]];


// Function correctAnswer is called when the user clicks on a right answer
// The click event and the number of the question (questionNumber) are passed as arguments
// The variables work such that the user must answer the questions sequentially, beginning with the first question
// A correct answer causes the button to become green and a well done message to appear
function correctAnswer(event, questionNumber)
{
    if (counter == questionNumber)
    {
        let press = event.target;
        press.style.backgroundColor = '#00FF00';
        document.querySelector("#q" + questionNumber).innerHTML = "Correct! Da iawn!";
        counter++;
        multipleScore++;
        showTotal();
    }
};

// Function incorrectAnswer is called when the user clicks on a wrong answer
// The function is similar to correctAnswer except the user's score is not increased
// An incorrect answer causes the button to become red and a pity message to appear
function incorrectAnswer(event, questionNumber)
{
    if (counter == questionNumber)
    {
        let press = event.target;
        press.style.backgroundColor = '#FF0000';
        document.querySelector("#q" + questionNumber).innerHTML = "Incorrect! Dyna biti!";
        counter++;
        showTotal();
    }
};

// Function freeResponseAnswer is called when the user submits a written answer to a question
// The variables again ensure that the user must answer questions sequentially
// The function loops through the array of acceptable answers, and compares the relevant index with the user's answer
// Again, a well done or a pity message appear dependent on the answer
function freeResponseAnswer(event, questionNumber)
{
    let input = document.querySelector("#answer" + questionNumber).value.toLowerCase();
    let press = event.target;

    if (counter == questionNumber)
    {
        for (let i = 0; i < answers[questionNumber - 6].length; i++)
        {
            if (input === answers[questionNumber - 6][i])
            {
                press.style.backgroundColor = '#00FF00';
                document.querySelector("#q" + questionNumber).innerHTML = "Correct! Da iawn!";
                counter++;
                freeScore++;
                showTotal();
                return;
            }
        }

        press.style.backgroundColor = '#FF0000';
        document.querySelector("#q" + questionNumber).innerHTML = "Incorrect! Dyna biti!";
        counter++;
        showTotal();
    }
}

// Function showTotal is called every time the user submits an answer
// However, the relevant total is only displayed at the end of the multiple choice section, and the end of the quiz proper
function showTotal()
{
    if (counter == 6)
    {
        document.querySelector("#score1").innerHTML = ("Multiple choice score: " + multipleScore + "/5.");
    }

    if (counter == 11)
    {
        let totalScore = multipleScore + freeScore;
        document.querySelector("#score2").innerHTML = ("Free response score: " + freeScore + "/5.");
        document.querySelector("#score3").innerHTML = ("Total score: " + totalScore + "/10.");
        document.querySelector("#thanks").innerHTML = "Diolch am chwarae!";
    }
}