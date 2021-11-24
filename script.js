let firstButton = document.getElementById("firstButton");
let firstTextbox = document.getElementById("firstTextbox");
let headerText = document.getElementById("headerText");
let firstDiv = document.getElementById("firstDiv");

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
    secondButton.addEventListener("click", ()=>{
      console.log("asking user how much sleep they have gotten on average over the last month");
      secondDiv.style.display = "none";
      thirdDiv.style.display = "unset";
      thirdButton.addEventListener("click", ()=>{
        console.log(thirdTextbox.value);
        if(isNum(thirdTextbox.value) && thirdTextbox.value != ""){
          console.log("changing to information about what constitues sleep deprivation");
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
