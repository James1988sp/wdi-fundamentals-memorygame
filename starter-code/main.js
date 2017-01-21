console.log("JS file is connected to HTML! Woo!");
 
var cards = ["queen", "king", "queen", "king"];
var cardsInPlay = [];
var board = document.getElementById('game-board');

/*var cardOne = "queen"
var cardTwo = "queen"
var cardThree = "king"
var cardFour = "king"

if (cardOne === cardThree) {
	alert('You found a match!')
} else if (cardTwo === cardthree) {
	alert('Sorry, try again.')
} else if (cardOne === cardTwo) {
	alert('Sorry, try again.')
} else if (cardOne === cardFour) {
	alert('Sorry, try again.')
} else if (cardTwo === cardThree) {
	alert('Sorry, try again.')
} else if (cardTwo === cardFour) {
	alert('You found a match!')
}*/

var createBoard = function () {
	// Function to clean board
	var cleanBoard = function(){
		// Loop to clean wrong coiches 
		for (i=0; i<4; i++) {
			// Set empty html for the element with class name style "card"
			document.getElementsByClassName('card')[i].innerHTML = '';
		}
	}

	// Function to check two card match
	var isMatch = function() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert('You found a match!')

		} else if (cardsInPlay[0] !== cardsInPlay[1]) {
			alert('Sorry, try again.');

			// Clean Board
			cleanBoard();
		}
	}

	// Function to check two cards clicked
	function isTwoCards() {
		if (this.getAttribute('data-card') === 'king') {
			this.innerHTML = '<img src="images/GoblinKing.jpg"/>';
		} else if (this.getAttribute('data-card') === 'queen') {
			this.innerHTML = '<img src="images/CoffinQueen.jpg"/>';
		}

		// Add the card clicked to the array cardsInPlay		
		cardsInPlay.push(this.getAttribute('data-card'));

		// Check cards in play are ready to check
		if (cardsInPlay.length === 2) {
			isMatch(cardsInPlay);
			cardsInPlay = []; 
		}
	}

	// Main loop create board
	for (var i = 0; i< cards.length; i++) {
		
		// We make a Div element
		var cardElement = document.createElement('div');
		
		// We set the div card attributes
		cardElement.setAttribute('class', 'card');
		// cardElement.setAttribute('id', 'card');
		// add element to the board
		board.appendChild(cardElement);

		// set id to created child card
		cardElement.setAttribute('data-card', cards[i]);

		// Add function for the click
		cardElement.addEventListener('click', isTwoCards)
	}
};

// Call fucntion create board
createBoard();



