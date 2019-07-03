/*
Egyptian War!
version 1.0 - no slaps, straight card play
*/

// VARIABLES
var windowOutput, person, card;
var hand, player = new Array;

// FUNCTIONS
function rearrange(arrayInput,index) {
	arrayInput.push(arrayInput[index]);
	arrayInput.shift();
}

function playCard(playerIndex) {
	hand.push(player[playerIndex][2][0]);
	// display new card
	player[playerIndex][2].shift();
	player[playerIndex][1] = len(player[playerIndex][2]);
	return hand[hand.length()-1].split();
}

function chooseNext() {
	if (person+1>=player.length()) {
		person = 0;
	} else {
		person++;
	}
}

function removePlayer(playerIndex) {
	// if player hand stays at 0 for three playCards, remove from game
	windowOutput = "Sorry, " + player[playerIndex][0] + ", you\'re out of cards! Goodbye!"";
	player.splice(playerIndex);
}

function randBetween(min,max) {
	const result = max - Math.floor(Math.random()*min);
	return result;
}

// REACT
class Card extends React.Component {
	render() {
		return (
			<button className="cardFace"/>
		);
	}
}

class PlayerHand extends React.Component {
	render() {
		return (
			<button className="cardBack" value="" onClick={playCard(person)} />
		);
	}
}

class Board extends React.Component {
	renderPlayField() {
		var cardValue = player[person][2][0] + " of " + player[person][2][1];
		return <Card value="cardValue" />;
	}
	renderPlayerHand(i) {
		return <PlayerHand(i) value="" />;
	}
	render() {
		return (
			<div>
				<div>
					{this.renderPlayField()}
				</div>
				for (i=0;i<player.length();i++) {
					<div>
						{this.renderPlayerHand(i)}
					</div>
				}
			</div>
		);
	}
}

class Game extends React.Component {
	render() {
		return(
			<Board />
		);
	}
}

// show game
ReactDOM.render(
	<Game/>,
	document.getElementById("playingField")
);

// GAME
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
	for (j=0;j<deck.length();j++) {
		card = Math.floor(Math.random()*52);
		deck.push(deck[card])
		deck.splice(card)
	}
}
