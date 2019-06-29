/*
Egyptian War!
version 1.0 - no slaps, straight card play
*/

var windowOutput, person;
var player = new Array;

function rearrange(arrayInput,index) {
	arrayInput.push(arrayInput[index]);
	arrayInput.shift();
}

function printInvalid(message) {
	windowOutput = "Invalid entry! \n " + message;
}

function playCard(playerIndex) {
	hand.push(player[playerIndex][2][0]);
	// display new card
	player[playerIndex][2].shift();
}

function chooseNext() {
	if (person+1>=player.length()) {
		person = 0;
	} else {
		person++;
	}
}

function removePlayer(playerIndex) {
	windowOutput = 'Sorry, ' + player[playerIndex][0] + ', you\'re out of cards! Goodbye!';
	player.splice(playerIndex);
}

function randBetween(min,max) {
	const result = max - Math.floor(Math.random(min)+1);
	return result;
}

const values = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
const suits = ["Hearts","Diamonds","Clubs","Spades"];
var deck = new Array;

// create cards
for (i=0; i<suits.length();i++) {
	for (j=0;j<values.length();j++){
		deck.push([values[j],suits[i]])
	}
}

// shuffle deck up to ten times
for (i=0;i<randBetween(6,10));i++) {
	deck.push(deck[i]) // THIS IS WRONG
}
