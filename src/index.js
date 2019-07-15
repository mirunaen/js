import "./styles.css";
//firt interaction with js
/* this is
a multi-line comment */
var myName = "Miruna";
myName = 8;
console.log(myName);

var a = 3;
var b = 4;
var c = "I am a";
//declaration
var d = 4;
console.log(d);
//assignment
d++;
console.log(a, b, c, d);
a += 3;
b = a + b;
c = c + " String";
d -= 4;
console.log(a, b, c, d);
d *= 4;
console.log(d);
var myStr = "Firstline\n\t\\secondLine\nThird line";
console.log(myStr);
var String = "I come first\nI come second.";
console.log(String);
var myFakeName = "Jacinta";
var sentence = "My fake name is..." + myFakeName + " .Don´t tell anyone.";
var startSentence = "My fake name is " + myFakeName;
var endSentence = " .And I am well.";
startSentence += endSentence;

console.log(sentence, startSentence, endSentence);
var realNameLenght = 0;
var realName = "Miruna";
realNameLenght = realName.length;
var firstLetterOfRealName = "";
firstLetterOfRealName = realName[0];
var lastNameOfRealName = realName[realName.length - 1];
console.log(realNameLenght, firstLetterOfRealName, lastNameOfRealName);

function wordBanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    "My " +
    myNoun +
    " is " +
    myAdjective +
    " and it " +
    myVerb +
    " " +
    myAdverb;
  return result;
}
console.log(wordBanks("wallet", "empty", "is", "enough"));
console.log(wordBanks("but", "small", "is", "plain"));

var myArray = [["myName", 8, 3], ["Son", 5, 30, 50, 40]];
var ourData = myArray[1][0];
myArray.push([3, "Father"]);
console.log(ourData);

var ourArray = [1, 2, 3];
var removedFromMyArray = ourArray.pop();

var hisArray = [1, 2, 3];
var removedFirstElement = hisArray.shift();
console.log(ourArray, removedFromMyArray);
console.log(removedFirstElement);

var array = [1, 2, 3];
var addNumberInArray = array.unshift(4);
console.log(addNumberInArray);

function reusableFunction() {
  console.log("Heyya,there!");
}
reusableFunction();

function sum(a, b) {
  console.log(a + b);
}
sum(2, 5);

var myGlobal = 10;

function twoFunction() {
  var output = "";
  if (typeof myGlobal !== "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  console.log(output);
}
twoFunction();

var outWear = "T-shirt";

function myOutfit() {
  var outWear = "Trousers";
  return outWear;
}
console.log(myOutfit());
console.log(outWear);

function minusSevenNumber(num) {
  return num - 7;
}
console.log(minusSevenNumber(10));

var changed = 0;
function change(num) {
  return (num + 5) / 3;
}
changed = change(10);

console.log(changed);

function testEqual(val) {
  if (val === 12) {
    return "Equal.";
  }
  return "Not equal.";
}
console.log(testEqual(10));

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "That was true.";
  }
  return "That was false";
}
console.log(trueOrFalse(true));

function testNotEqual(val) {
  if (val !== 3) {
    return "Not equal";
  }
  return "Equal";
}
console.log(testNotEqual(1));

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or under";
}

console.log(testGreaterThan(10));

function greaterThanOrEqual(val) {
  if (val >= 10) {
    return "Greater or equal 10";
  }
  if (val >= 100) {
    return "Over or equal 100";
  }
  return "Under ten";
}
console.log(greaterThanOrEqual(22));

var reminder;
reminder = 11 % 3;
console.log(reminder);

function testLessThan(val) {
  if (val < 25) {
    return "It´s less than 25";
  }
  if (val < 250) {
    return "less than 250";
  }
  return "More than 250";
}
console.log(testLessThan(280));

function testLogicalAnd(val) {
  if (val <= 50 && val <= 25) {
    return "Yes";
  }
  return "No";
}
console.log(testLogicalAnd(2));

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
console.log(testLogicalOr(200));

function testElse(val) {
  if (val > 5) {
    return "Greater than 5";
  } else {
    return "5 or less";
  }
}
console.log(testElse(6));

function testElseIf(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val > 10) {
    return "More than 10";
  } else {
    return "In between 5 and 10";
  }
}
console.log(testElseIf(1));

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(testSize(4));

var names = [
  "hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double bogey",
  "Go home!"
];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes <= par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}
console.log(golfScore(5, 4));

var statesOfCollness = [
  "loser",
  "invisible",
  "nobody",
  "normalsucker",
  "cool",
  "Miruna"
];
function playWithMe(score, outfit) {
  if (score === 10) {
    return statesOfCollness[5];
  } else if (score <= outfit - 1) {
    return statesOfCollness[4];
  } else if (score <= outfit - 2) {
    return statesOfCollness[3];
  } else if (score <= outfit - 3) {
    return statesOfCollness[2];
  } else if (score <= outfit + 1) {
    return statesOfCollness[1];
  } else if (score <= outfit + 2) {
    return statesOfCollness[0];
  }
}
console.log(playWithMe(10, 10));

function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}
console.log(caseInSwitch(1));

function sequencialSizes(val) {
  var a = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      a = "Low";
      break;
    case 4:
    case 5:
    case 6:
      a = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      a = "High";
      break;
    default:
      a = "None";
      break;
  }
  return a;
}
console.log(sequencialSizes(9));
function isLess(a, b) {
  return a < b;
}
console.log(isLess(2, 1));

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return "undefined";
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-2, 2));

var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
    default:
      count = "Null";
      break;
  }
  var holdbet = " Hold";
  if (count > 0) {
    holdbet = "Bet";
  }
  return count + " " + holdbet;
}

cc(2);
cc("K");
cc(10);
cc("K");
cc("A");
console.log(cc(4));

//Example object
var ourDog = {
  name: "Rufus",
  legs: 4,
  owner: "Miruna",
  age: 1,
  "some friends": ["everything!"]
};
ourDog.bark = "woof-woof";
ourDog.name = "Happy Rufus";
var myDog = ourDog.name;
var myLegs = ourDog.legs;
var friends = ourDog["some friends"];
console.log(myDog, myLegs, friends);

var testObj = {
  12: "Montana",
  16: "Lalaland",
  20: "Null",
  name: "Nobob"
};
delete testObj.name;
var playerNumber = 16;
var play = testObj[playerNumber];
console.log(play);

function phoneticLookUp(val) {
  var result = " ";

  var lookUp = {
    lara: "Chicago",
    barnie: "NY",
    ron: "Yupiland",
    cun: "Spain",
    olga: "Moon"
  };
  result = lookUp[val];
  return result;
}
console.log(phoneticLookUp("lara"));

function lookUpBuddy(val) {
  var result = "";

  var lookUps = {
    ana: "Malagon",
    Santa: "Polo Norte",
    miruna: "Web",
    ruxi: "Instagram"
  };
  result = lookUps[val];
  return result;
}
console.log(lookUpBuddy("ana"));

var myObj = {
  gift: "pony",
  bed: "small",
  child: "None"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not found";
  }
}
console.log(checkObj("gift"));

var myTry = {
  name: "Miruna",
  age: 17,
  hairColor: "brown"
};

function checkTry(checkPo) {
  if (myTry.hasOwnProperty(checkPo)) {
    return myTry[checkPo];
  } else {
    return "Not found";
  }
}
console.log(checkTry("sum"));

var lala = {
  lala: "nono",
  dod: "nin"
};

function checkLala(check) {
  lala.hasOwnProperty(check);
}
console.log(checkLala("lala"));

let numbers = [2, 3, 4, 5, 8, 7];

numbers.map(() => console.log("Hey!"));
