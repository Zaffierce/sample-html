//sets function askQuestion to a universal function where I can pass in any prompt I want.
//askQuestion("Hello!")
function askQuestion(msg, picture, section) {
  document.write(`<img id="${section}" src=${picture}>`)
  answer = prompt(msg);
}

alert(`Stop!  Who would enter this website must answer me this question, ere the other side he see.`)
askQuestion(`WHAT.... is your name?`, "https://media.giphy.com/media/udESfsOyq1wnm/giphy.gif", "name");

//var secretKey = ['Z', 'A', 'Z']
//Only works on the index[0]....
var secretKey = 'Brian';
//if validated is false, don't prompt the user with customization code later.
var validated = false;

//Loops for 5 times
for (var i = 0; i <= 3; i++) {
  if (answer === secretKey) {
    validated = true;
    break;
  } else {
    //Asks the question 3 times.
    if (i <= 2) {
      //Subtracts 3 from i
      timesRemaining = '3' - i;
      askQuestion(`I don't believe your name is ${answer}, but I am a gracious gate keeper.  You may try ${timesRemaining} more times.`," " , " ");
    }
    //If it's on the 3rd time, send an alert that they've failed.
    if (i === 3) {
      document.getElementById("name").style.display = "none";
      document.write(`<img src="https://media.giphy.com/media/JVpOY2xVaydJS/giphy.gif">`);
      document.write(`WRONG!`);
    }
  }
}

function getName() {
  setName = answer;
  document.getElementById("name").style.display = "none";
  document.write(`Welcome ${setName}!  <br /><br />`)
}

function askColor() {
  askQuestion(`WHAT.... is your favorite color?`, "https://i.imgur.com/5Bwl3Nl.gif", "color")
  setColor = answer;
  document.body.style.color = setColor;
  document.getElementById("color").style.display = "none";
}

function askAnimal() {
  setAnimal = prompt(`WHAT.... is your favorite animal?  I'll be kind and give you a choice of cat, dog or sheep.`)
}



if (validated === true) {
  getName();
  askColor();
  askAnimal();
  //sets askAnimal to lowercase
  setAnimalLC = setAnimal.toLowerCase()

  function giveAnswer() {
    document.write(fact)
    document.write(picture)
  }

  //Rewrite to capture this into a function to call after being validated.

  if (setAnimalLC === "cat" || setAnimalLC === "dog" || setAnimalLC === "sheep") {
    if (setAnimalLC === "cat") {
      var fact = '70% of your cats life is spent asleep. <br />'
      var picture = '<img id="cat" src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg">'
      giveAnswer()
    }
    if (setAnimalLC === "dog") {
      var fact = 'When your dog is carefully choosing the perfect place to do his business, it is because they prefer to go poop in alignment with the Earth’s magnetic field. <br />'
      var picture = '<img id="dog" src="https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg">'
      giveAnswer()
    }
    if (setAnimalLC === "sheep") {
      var fact = 'When Woodrow Wilson was President, the First Lady had sheep graze on the White House lawn to keep it neat and well trimmed.  <br />'
      var picture = '<img id="dog" src="https://images.pexels.com/photos/1773181/pexels-photo-1773181.jpeg">'
      giveAnswer()
    }
  } else {
    document.write(`<img src="https://media.giphy.com/media/JVpOY2xVaydJS/giphy.gif">`);
    document.write(`WRONG!`);
  }
} 







// while (end < 10) {
//   if (answer === "Jon") {
//     alert("Yay!")
//     break;
//   } else {
//     askQuestion();
//     end++;
//   }
// }
// answerLC = answer.toLowerCase();

// for(i = 0; i < response.length; i++) {
//   if (answerLC === "Jon") {
//     alert("True")
//   } else {
//     alert("false")
//   }
// }


// if (answer[0] === "3") {
//   alert("True")
// } else {
//   alert("false")
// }


// for(var i = 0; i < response.length; i++) {
//   if (!correctResponse) { 
//     alert("Incorrect")
//   } else { alert("Correct")}
// }

// if (nums[0] === "3") {
//   document.write("You've got it!  My favorite number is 3")
// } else {
//   answer = prompt("What is my favorite number?");
// }

// while (nums[0] !== '3') {
//   answer = prompt("Please try again!")
//   } 



//document.write(nums);

















