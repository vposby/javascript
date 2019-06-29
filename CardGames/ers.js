/*
Desktop/Software/Javascript
Egyptian War!
version 1.0 - no slaps, straight card play
*/

function rearrange(arrayInput,index) {
	arrayInput.push(arrayInput[index]);
	arrayInput.shift();
}

function printInvalid(message) {
	window.alert("Invalid entry! \n " + message);
}

function playCard(playerIndex) {
	hand.push(player[playerIndex][2][0]);
	//display new card
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
	window.alert('Sorry, ' + player[playerIndex][0] + ', you\'re out of cards! Goodbye!');
	player.splice(playerIndex);
}

const values = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
const suits = ["Hearts","Diamonds","Clubs","Spades"];
deck = new Array;

for (i=0; i<suits.length();i++) {
	for (j=0;j<values.length();j++){
		deck.push([values[j],suits[i]])
	}
}