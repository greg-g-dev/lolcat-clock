var isPartyTime = false;
var partyBtn = document.getElementById("partyTimeButton");
var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 3; // 3PM
var timeEventJS = document.getElementById("timeEvent");
var lolcat = document.getElementById("lolcat");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
var oneSecond = 1000;
var wakeupTimeSelected = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelected = document.getElementById("lunchTimeSelector");
var napTimeSelected = document.getElementById("napTimeSelector");

var updateClock = function()
{
	if (time == partyTime){
		messageText = "IZ PARTEE TIME!!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	} else if (time == napTime) {
		messageText = "IZ NAP TIME...";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	} else if (time == lunchTime) {
		messageText = "IZ NOM NOM NOM TIME!!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	} else if (time == wakeupTime) {
		messageText = "IZ TIME TO GETTUP.";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	} else if (time < noon) {
		messageText = "Good morning!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	} else if (time > evening) {
		messageText = "Good Evening!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	} else {
		messageText = "Good afternoon!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	}

	timeEventJS.innerText = messageText;
	lolcat.src = image;

	showCurrentTime();
};

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};
setInterval(updateClock, oneSecond);

var partyEvent = function() {
	if (isPartyTime === false)
	{
		isPartyTime = true;
		time = partyTime;
		partyBtn.innerText = "Party Over";
		partyBtn.style.backgroundColor = "#0A8DAB";
	}
	else {
		isPartyTime = false;
		time = new Date().getHours();
		partyBtn.innerText = "PARTY TIME!";
		partyBtn.style.backgroundColor = "#222";
	}
};

var wakeEvent = function() {
	wakeupTime = wakeupTimeSelected.value;
};

var lunchEvent = function() {
	lunchTime = lunchTimeSelected.value;
};

var napEvent = function() {
	napTime = napTimeSelected.value;
};
partyBtn.addEventListener("click",partyEvent);
wakeupTimeSelected.addEventListener("change",wakeEvent);
lunchTimeSelected.addEventListener("change",lunchEvent);
napTimeSelected.addEventListener("change",napEvent);
