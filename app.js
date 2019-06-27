// var today = new Date();
// var hourNow = today.getHours();
// var minuteNow = today.getMinutes();
// var dateNow = today.getDate();
// var dateMonth = today.getMonth();
// var dateYear = today.getFullYear();
// var greeting;

// var adjustedTimeZone = hourNow - 7

// //var timeZone = prompt('What is your time zone?');

// if (hourNow > 18) {
//   greeting = 'Good evening!';
// } else if (hourNow > 12) {
//   greeting = 'Good afternoon';
// } else if (hourNow > 0) {
//   greeting = 'Good morning!';
// } else {
//   greeting = 'Welcome!';
// }

// document.write(`${greeting}, the time is currently ${hourNow}${minuteNow}.  The date is ${dateMonth}/${dateNow}/${dateYear}.`);

// // console.log(today);
// // console.log(greeting);
// // console.log(hourNow);
// // console.log(dateNow);
// // console.log(dateMonth);
// // console.log(dateYear);
// // console.log(adjustedTimeZone)


// // console.log(`${greeting}, the time is currently ${adjustedTimeZone}${minuteNow}.  The date is ${dateMonth}/${dateNow}/${dateYear}.`)




// var name = prompt("What is your name?");
// var answer = alert("Welcome " + name)

var setName = prompt("Please enter your name!");
//document.write(setfontcolor);
var setColor = prompt("Please enter a color!");
var setAnimal = prompt("Please enter an animal type.  You may choose from Cat, Dog or Sheep.")

document.write("Welcome "+setName+"! <br /><br />");
document.body.style.color = setColor;


//Want to do - set setAnimal to a specific color after entered.  I.e. set to red or something
// document.getElementById("setAnimal")

//var array = ['cat', 'dog', 'sheep']
//document.write(array);

//if (!animalPromptArray) { alert("Fail")} else { alert("Success")}

//Setting the response to lower case, removes the case sensitive issue + duplicate shit below
setAnimalLC = setAnimal.toLowerCase()

//if (setAnimal.toLowerCase() === "cat" || setAnimal.toLowerCase() === "dog" || setAnimal.toLowerCase() === "sheep") { 
if (setAnimalLC === "cat" || setAnimalLC === "dog" || setAnimalLC === "sheep") { 
document.write("You have chosen " + setAnimalLC + ", here is a fun fact about that animal - <br><br>");
  if (setAnimalLC === "cat") {
    document.write("70% of your cats life is spent asleep. <br />");
    document.write('<img id="cat" src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg"')
  }
  if (setAnimalLC === "dog") {
    document.write("When your dog is carefully choosing the perfect place to do his business, it is because they prefer to go poop in alignment with the Earth’s magnetic field. <br />");
    document.write('<img id="dog" src="https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg"')
  }
  if (setAnimalLC === "sheep") {
    document.write("When Woodrow Wilson was President, the First Lady had sheep graze on the White House lawn to keep it neat and well trimmed.  <br />");
    document.write('<img id="dog" src="https://images.pexels.com/photos/1773181/pexels-photo-1773181.jpeg"')
    //
  }
} else {
  alert("Boo you suck.  You failed to enter a valid response, so now you won't get the super cool fact about that animal!")
}


// document.body.style.color = setfontcolor;

// var imageLink = prompt("Please provide an image link");

// document.getElementById("changeme")