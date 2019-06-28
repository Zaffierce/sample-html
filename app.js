//sets function askQuestion to a universal function where I can pass in any prompt I want.
//askQuestion("Hello!")
function askQuestion(msg) {
  answer = prompt(msg);
}

askQuestion("What is the secret password?");

//var secretKey = ['Z', 'A', 'Z']
//Only works on the index[0]....
var secretKey = 'Brian';
//if validated is false, don't prompt the user with customization code later.
var validated = false;

//Loops for 5 times
for (var i = 0; i <= 5; i++) {
  if (answer === secretKey) {
    validated = true;
    break;
  } else {
    //Asks the question 4 times.
    if (i <= 4) {
      //Subtracts 5 from i
      timesRemaining = '5' - i;
      askQuestion('ERROR:  Incorrect password, please try again.  Attempts remaining: ' + timesRemaining);
    }
    //If it's on the 5th time, send an alert that they've failed.
    if (i === 5) {
      alert("You have failed authentication too many times!");
      //document.getElementsByTagName('body').style.display = 'none';
      document.getElementsByName('body').style.display = 'none';
      //element.style.display = 'none';
    }
  }
}

function askName() {
  setName = prompt("Please enter your name!");
  document.write(`Welcome ${setName}!  <br /><br />`)
}

function askColor() {
  setColor = prompt("Please enter a color!");
  document.body.style.color = setColor;
}

function askAnimal() {
  setAnimal = prompt("Please enter an animal type.  You may choose from cat, dog or sheep.")
}

if (validated === true) {
  alert("Successfully logged in.  Please fill in the following data...")

askName();
askColor();
askAnimal();
//sets askAnimal to lowercase
setAnimalLC = setAnimal.toLowerCase()

function giveAnswer() {
  document.write(fact)
  document.write(picture)
}

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
  alert("Boo you suck.  You failed to enter a valid response, so now you won't get the super cool fact about that animal!")
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

















