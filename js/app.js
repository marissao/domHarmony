/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.

var spanMatch = document.getElementById('matCount');
spanMatch.innerHTML = 11;

// SHORCUT: matCount.innerHTML = 55;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.

var spanMsg = document.getElementById('msgCount');
spanMsg.innerHTML = 23;

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.

var divFullName = document.getElementById('fullname');
divFullName.innerHTML = 'Ronald McDonald';

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.

var divAge = document.getElementById('age');
divAge.innerHTML = 63;

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.

var divJob = document.createElement('div');
divJob.id = 'job';
divJob.innerHTML = 'Clown and Restauranteur';
data.appendChild(divJob)

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.

var divHobbies = document.createElement('div');
divHobbies.id = 'hobbies';
divHobbies.innerHTML = 'Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.';
data.appendChild(divHobbies)

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.

var divLocation = document.createElement('div');
divLocation.id = 'location';
divLocation.innerHTML = 'Honolulu, HI';
data.appendChild(divLocation)

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.

var divWants = document.createElement('div');
divWants.id = 'wants';
divWants.innerHTML = 'Looking for a Mrs. McDonald';
data.appendChild(divWants)

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).

var revisedProfile = document.getElementById('pro1');
revisedProfile.innerHTML = "Hey my name is Ronald. I have lots of money from my multiple franchises. Dinner is my treat."; 

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.

var matchName = document.getElementsByClassName('firstName');
matchName[0].innerHTML = 'Wendy';

/* MISTAKE: var matchName = document.getElementsByClassName('firstName');
matchName.innerHTML = 'Wendy'; */

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.

var matchAge = document.getElementsByClassName('otherAge');
matchAge[0].innerHTML = 48;

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.

var matchStatus = document.getElementsByClassName('status');
matchStatus[0].innerHTML = 'Mother';

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.

matchName[1].innerHTML = 'Peko Chan';

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.

matchAge[1].innerHTML = 68;

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto

document.getElementsByClassName('other')[2].src = 'https://assets3.thrillist.com/v1/image/1514690/size/tmg-article_default_mobile;jpeg_quality=20.jpg'; // NOTE: you would not use the innerHTML b/c for images, there is no text stored <>here<>, like with <div>
matchName[2].innerHTML = 'Bee';
matchAge[2].innerHTML = 41;
matchStatus[2].innerHTML = 'Complicated';
var matchMotto = document.getElementsByClassName('motto');
matchMotto[2].innerHTML = 'Welcome to Jollibee!';
