
window.onload = function() {
    triviaForm.style.display = 'none';
  };
 const triviaForm = document.querySelector("#triviaForm");
 const start = document.querySelector("#start");
 start.addEventListener("click", function(){
    start.style.display = "none";
    triviaForm.style.display = "block";
     onTimer();
 });
 
 //==============TIMER======================
 i = 30;
 function onTimer(){
    document.querySelector("#timeLeft").innerHTML = "<h3>You have " + i + " seconds to complete.</h3>";
    i--;
    if(i < 0) {
        document.querySelector("#timeLeft").innerHTML = "<h3>You have run out of time!</h3";
        triviaForm.style.display = 'none';
    }else {
        setTimeout(onTimer, 1000);
    }
 }
 
 //=========================================
 function submitAns() {
    let total = 5;
    let score = 0;
    let missed = 0;
    // Questions
    let q1 = document.forms["trivia"]["q1"].value;
    let q2 = document.forms["trivia"]["q2"].value;
    let q3 = document.forms["trivia"]["q3"].value;
    let q4 = document.forms["trivia"]["q4"].value;
    let q5 = document.forms["trivia"]["q5"].value;
    
    
    //Results
    let results = document.querySelector("#results");
    
    //Answers
    let answers = ["c", "d", "b", "c", "b"];
    for(let i = 1; i <= total; i++) {
        if(eval('q'+i) === answers[i-1]) {
            score++;
        } else {
            missed++;
        }
    }
    // Results
    if(score > 0){
        results.textContent = "You got " + score +  " out of " + total + ".";
    }
   // To hide timer
    document.querySelector("#timeLeft").style.display = "none";
    // To hide questions after session expires
    triviaForm.style.display = 'none';
    return false;
 }