var candle = document.getElementById("candle")
candle.onclick = async function (){
   await deleteSentence("#fortunes")
   newQuote()
}


var song = document.getElementById("sound")
var icon = document.getElementById("icon")

icon.onclick = function() {
    if(song.paused){
        song.play();
        icon.src = "images/download.png"
    } else {
        song.pause();
        icon.src = "images/1.webp"
    }
}

async function typeSentence(sentence, elementRef, delay = 40) {  //some Help from stackoverflow with sentence split and using jquery
    const letters = sentence.split("");
    i = 0;
    while (i < sentence.length) {
        await waitForMs(delay);
        $(elementRef).append(letters[i]);
        i++
    }
    return;
}

function waitForMs(ms){
    return new Promise (resolve => setTimeout(resolve, ms))
}
async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(50);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }
function random(){
    let rando = Math.random() * 100
    return rando;
}


function quotes(){
  let score = "";
  let count = random();
 
  if (count < 25) 
  {
    typeSentence("Young one. You must not be so quick to progress. Dissolve the ego, and all will come naturally.", '#fortunes')
    score = "Bad Luck";
  } else if (count > 25 && count < 50) {
    typeSentence("My student, it is I, the scrum leader at Amazon, who thinks your code could use some work.","#fortunes")

    score = "Bad Luck";
  } else if (count > 50 && count < 75) {
    typeSentence("Wow, I am impressed that you recognized that this code was all over the place and had little documentation! Well done!", "#fortunes")

    score = "Good Luck";
  } else if (count > 75) {
    typeSentence("Your future travels seem very bright! Find the rest of your directions somewhere in the instructions", "#fortunes")
    
    score = "Good Luck";
  }
  document.getElementById("scored").innerHTML = score;

}
function newQuote(){
    quotes()
}
newQuote()



