
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

askName();
askColor();
askAnimal();
setAnimalLC = setAnimal.toLowerCase()

function giveAnswer() {
  document.write(fact)
  document.write(picture)
}

//want to do:  create an array with cat, dog, sheep and validate response against that.
//var animalArray = ['cat','dog','sheep'];

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
