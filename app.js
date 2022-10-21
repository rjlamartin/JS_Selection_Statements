console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

//let answer = prompt("what is your name?");
//console.log("Hello, " + answer);

let magicNumber = 22;
let guess = window.prompt("What's the magic number?");

if (guess == magicNumber) {
  console.log("Congratulations!!!");  
} else if (guess > magicNumber) {
  console.log("too high");
} else if (guess < magicNumber) {
  console.log("too low");
}

//Exercise 2

let birthMonth = window.prompt("Please insert your birth month:");

switch (birthMonth.toLowerCase()) {
  case "december":
  case "january":
  case "february":
    console.log("Winter");
    break;
  case "march":
  case "april":
  case "may":
    console.log("Spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("Summer");
    break;
  case "september":
  case "october":
  case "november":
    console.log("Fall");
    break;
  default:
    console.log("I don't recognize that month...");
}

//Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

//if (typeId == "01") {
  //type = "Tank top";
//} else if (typeId == "02") {
  //type = "T-Shirt";
//} else if (typeId == "03") {
  //type = "Long Sleeve";
//} else if (typeId == "04") {
  //type == "Sweat Shirt";
//} else {
  //type = "Other";
//}

switch(typeId) {
  case "01":
    type = "Tank Top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

//if (colorId == "BL") {
  //color = "Black";
//} else if (colorId == "BL") {
  //color = "Blue";
//} else if (colorId == "RD") {
  //color = "Red";
//} else if (colorId == "PU") {
  //color = "Purple";
//} else {
  //color = "White";
//}

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

//if (sizeId == "S") {
  //size = "Small";
//} else if (sizeId == "M") {
  //size = "Medium";
//} else if (sizeId == "L") {
  //size = "Large";
//} else if (sizeId == "XL") {
  //size = "Extra Large";
//} else {
  //size = "One Size Fits All";
//}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);