let firstButton = document.getElementById("firstButton");
let firstTextbox = document.getElementById("firstTextbox");
let headerText = document.getElementById("headerText");
let firstDiv = document.getElementById("firstDiv");

let firstQuestionDangerousDiv = document.getElementById("firstQuestionDangerousDiv");
let firstQuestionSubparDiv = document.getElementById("firstQuestionSubparDiv");
let firstQuestionGoodDiv = document.getElementById("firstQuestionGoodDiv");
let firstQuestionOversleepingDiv = document.getElementById("firstQuestionOversleepingDiv");



let secondDiv = document.getElementById("secondDiv");
secondDiv.style.display = "none";
let secondButton = document.getElementById("secondButton");


let thirdDiv = document.getElementById("thirdDiv");
thirdDiv.style.display = "none";
let thirdButton = document.getElementById("thirdButton");
let thirdTextbox = document.getElementById("thirdTextbox");

let fourthDiv = document.getElementById("fourthDiv");
fourthDiv.style.display = "none";
let fourthButton = document.getElementById("fourthButton");

let fifthDiv = document.getElementById("fifthDiv");
fifthDiv.style.display = "none";

function isNum(val){
  return !isNaN(val)
}

firstButton.addEventListener("click", ()=>{
  if(isNum(firstTextbox.value) && firstTextbox.value != ""){
    //change to information about the effects of sleep deprivation
    console.log("changing to information about the effects of sleep deprivation");
    firstDiv.style.display = "none";
    secondDiv.style.display = "unset";

    if(firstTextbox.value > 9){
      firstAnswerText.innerHTML = "You are oversleeping.";
      firstQuestionDangerousDiv.style.display = "none";
      firstQuestionSubparDiv.style.display = "none";
      firstQuestionGoodDiv.style.display = "none";
      firstQuestionOversleepingDiv.style.display = "unset";
    }
    if(firstTextbox.value <= 4){
      firstAnswerText.innerHTML = "You are dangerously sleep deprived.";
      firstQuestionDangerousDiv.style.display = "unset";
      firstQuestionSubparDiv.style.display = "none";
      firstQuestionGoodDiv.style.display = "none";
      firstQuestionOversleepingDiv.style.display = "none";
    }
    if(firstTextbox.value >= 7 && firstTextbox.value <= 9){
      firstAnswerText.innerHTML = "You are within the healthy range of sleep duration.";
      firstQuestionDangerousDiv.style.display = "none";
      firstQuestionSubparDiv.style.display = "none";
      firstQuestionGoodDiv.style.display = "unset";
      firstQuestionOversleepingDiv.style.display = "none";
    }
    if(firstTextbox.value < 7 && firstTextbox.value > 4){
      firstAnswerText.innerHTML = "You are sleep deprived.";
      firstQuestionDangerousDiv.style.display = "none";
      firstQuestionSubparDiv.style.display = "unset";
      firstQuestionGoodDiv.style.display = "none";
      firstQuestionOversleepingDiv.style.display = "none";
    }


    secondButton.addEventListener("click", ()=>{
      console.log("asking user how much sleep they have gotten on average over the last month");
      secondDiv.style.display = "none";
      thirdDiv.style.display = "unset";
      thirdButton.addEventListener("click", ()=>{
        console.log(thirdTextbox.value);
        if(isNum(thirdTextbox.value) && thirdTextbox.value != ""){
          console.log("changing to information about what constitues sleep deprivation");

          if(thirdTextbox.value > 9){
            thirdAnswerText.innerHTML = "You are chronically oversleeping.";
          }
          if(thirdTextbox.value <= 4){
            thirdAnswerText.innerHTML = "You are chronically dangerously sleep deprived.";
          }
          if(thirdTextbox.value >= 7 && thirdTextbox.value <= 9){
            thirdAnswerText.innerHTML = "You are chronically within the healthy range of sleep duration.";
          }
          if(thirdTextbox.value < 7 && thirdTextbox.value > 4){
            thirdAnswerText.innerHTML = "You are chronically sleep deprived.";
          }




          thirdDiv.style.display = "none";
          fourthDiv.style.display = "unset";
          fourthButton.addEventListener("click", ()=>{
            fourthDiv.style.display = "none";
            fifthDiv.style.display = "unset";
          })
        } else {
          thirdTextbox.value = "";
        }
      })
    })
  } else {
    firstTextbox.value = "";
  }
})

firstTextbox.addEventListener("keyup", function(event){
  if(event.keyCode === 13){
    firstButton.click();
  }
})

thirdTextbox.addEventListener("keyup", function(event){
  if(event.keyCode === 13){
    thirdButton.click();
  }
})
