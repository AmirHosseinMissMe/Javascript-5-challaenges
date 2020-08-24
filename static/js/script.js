var isFinished = false;
var disableHit = false;

function calAgesInDays() {	
	var birthYear = prompt("What year were you born...Good friend?");
	var year = new Date().getFullYear();
	var ageInDays = (year - birthYear) * 365;
	var h1 = document.createElement('h1');
	var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old');
	h1.setAttribute('id', 'ageInDays');
	h1.appendChild(textAnswer);
	document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
	document.getElementById('ageInDays').remove();
}

function generateCat(){
	var image = document.createElement('img');
	var div = document.getElementById('flex-cat-gen');
	image.src = "http://www.gif.ovh//persian-gif/%DA%AF%D8%B1%D8%A8%D9%87%20Gif%202/%DA%AF%D8%B1%D8%A8%D9%87%20Gif%20(9).gif";
	div.appendChild(image);
}

function playRPS(choice) {
	var systemChoice = Math.floor(Math.random() * 3);
	var result;
	var img1Src;
	var img2Src;
	if(systemChoice == 0){
		img2Src = 'r';
		if(choice.id == "rock"){
			img1Src = 'r';
			result = "Thats a tie !";
		}
		else if(choice.id == "paper"){
			img1Src = 'p';
			result = "You won :(";
		}
		else{
			img1Src = 's';
			result = "I won this game !";
		}
	}
	else if(systemChoice == 1){
		img2Src = 'p';
		if(choice.id == "paper"){
			img1Src = 'p';
			result = "Thats a tie !";
		}
		else if(choice.id == "scissors"){
			img1Src = 's';
			result = "You won :(";
		}
		else{
			img1Src = 'r';
			result = "I won this game !";
		}
	}
	else{
		img2Src = 's';
		if(choice.id == "scissors"){
			img1Src = 's';
			result = "Thats a tie !";
		}
		else if(choice.id == "rock"){
			img1Src = 'r';
			result = "You won :(";
		}
		else{
			img1Src = 'p';
			result = "I won this game !";
		}
	}
	var txtClass;
	if(result == 'I won this game !')
		txtClass = 'r';
	else if(result == 'Thats a tie !')
		txtClass = 'b';
	else
		txtClass = 'g';
	var img1 = document.createElement('img');
	var img2 = document.createElement('img');
	var text = document.createElement('h2');
	var textAnswer = document.createTextNode(result);
	img1.setAttribute('class', 'rps');
	img1.setAttribute('src', 'static/images/' + img1Src + '.jpg');
	img1.setAttribute('onclick', 'resetRPS()');
	img1.setAttribute('id', 'playerChoice');
	img2.setAttribute('class', 'rps');
	img2.setAttribute('src', 'static/images/' + img2Src + '.jpg');
	img2.setAttribute('onclick', 'resetRPS()');
	img2.setAttribute('id', 'systemChoice');
	text.appendChild(textAnswer);
	text.setAttribute('id', 'result');
	text.setAttribute('class', 'rpsres' + txtClass)
	document.getElementById('rock').remove();
	document.getElementById('scissors').remove();
	document.getElementById('paper').remove();
	document.getElementById('flex-box-rps-div').appendChild(img1);
	document.getElementById('flex-box-rps-div').appendChild(text);
	document.getElementById('flex-box-rps-div').appendChild(img2);
}

function resetRPS()
{
	var img1 = document.createElement('img');
	var img2 = document.createElement('img');
	var img3 = document.createElement('img');
	img1.setAttribute('class', 'rps');
	img1.setAttribute('src', 'static/images/r.jpg');
	img1.setAttribute('onclick', 'playRPS(this)');
	img1.setAttribute('id', 'rock');
	img2.setAttribute('class', 'rps');
	img2.setAttribute('src', 'static/images/p.jpg');
	img2.setAttribute('onclick', 'playRPS(this)');
	img2.setAttribute('id', 'paper');
	img3.setAttribute('class', 'rps');
	img3.setAttribute('src', 'static/images/s.jpg');
	img3.setAttribute('onclick', 'playRPS(this)');
	img3.setAttribute('id', 'scissors');
	document.getElementById('result').remove();
	document.getElementById('playerChoice').remove();
	document.getElementById('systemChoice').remove();
	document.getElementById('flex-box-rps-div').appendChild(img1);
	document.getElementById('flex-box-rps-div').appendChild(img2);
	document.getElementById('flex-box-rps-div').appendChild(img3);
}

var all_buttons = document.getElementsByTagName('button');
var copyAllButtons = [];
for (let i=0 ; i < all_buttons.length ; i++){
	copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(choice){
	if(choice.value === 'red'){
		makeButtonsRed();
	} else if(choice.value === 'green'){
		makeButtonsGreen();
	} else if(choice.value === 'reset'){
		resetButtonsColors();
	} else if(choice.value === 'random'){
		makeButtonsRandomColored();
	} 
}

function makeButtonsRed(){
	for(let i = 0 ; i < all_buttons.length; i++){
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add("btn-danger");
	}
}

function makeButtonsGreen(){
	for(let i = 0 ; i < all_buttons.length; i++){
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add("btn-success");
	}
}

function resetButtonsColors(){
	for(let i = 0 ; i < all_buttons.length ; i++){
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add(copyAllButtons[i]);
	}
}

function makeButtonsRandomColored(){
	var choices = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning'];
	var randomNum ;
	for(let i = 0 ; i < all_buttons.length ; i++){
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		randomNum = Math.floor(Math.random() * 4);
		all_buttons[i].classList.add(choices[randomNum]);
	}
}

let blackjackGame = {
	'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
	'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
	'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
	'cardsValues': [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, [1,11]],
	'wins': 0,
	'losses': 0,
	'ties': 0,
};

const YOU =  blackjackGame['you'];
const DEALER =  blackjackGame['dealer'];

const hitSound = new Audio('static/sound/swish.m4a');
const winSound = new Audio('static/sound/cash.mp3');
const lossSound = new Audio('static/sound/aww.mp3');

document.querySelector("#blackjack-hit-button").addEventListener('click', blackjackHit);
document.querySelector("#blackjack-deal-button").addEventListener('click', blackjackDeal);
document.querySelector("#blackjack-stand-button").addEventListener('click', dealerLogic);

function blackjackHit(){
	if(disableHit == true){
		return;
	}
	var randomNum = Math.floor(Math.random() * 13);
	showCard(randomNum, YOU);
	updateScore(randomNum, YOU);
	showScore(YOU);
}

function showCard(randomNum, actionPlayer){
	if(actionPlayer['score'] <= 21){
		let cardImage = document.createElement('img');
		cardImage.src = 'static/images/' + blackjackGame.cards[randomNum] + '.png';
		document.querySelector(actionPlayer['div']).appendChild(cardImage);
		hitSound.play();
}
	}

function blackjackDeal(){
	if(isFinished == false){
		return;
	}
	isFinished = false;
	disableHit = false;
	let yourImages = document.querySelector('#your-box').querySelectorAll('img');
	let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
	for(let i = 0 ; i < yourImages.length ; i++){
		yourImages[i].remove();
	}
	for(let i = 0 ; i < dealerImages.length ; i++){
		dealerImages[i].remove();
	}
	YOU['score'] = 0;
	DEALER['score'] = 0;
	document.querySelector(YOU['scoreSpan']).style.color = 'white';
	document.querySelector(DEALER['scoreSpan']).style.color = 'white';
	document.querySelector('#blackjack-result').style.color = 'black';
	document.querySelector('#blackjack-result').textContent = "Let's play";
	showScore(YOU);
	showScore(DEALER);
}

function updateScore(randomNum, actionPlayer){
	if(randomNum == 12){
		if(actionPlayer['score'] + blackjackGame['cardsValues'][randomNum][1] < 21){
			actionPlayer['score'] += blackjackGame['cardsValues'][randomNum][1]
		}
		else{
			actionPlayer['score'] += blackjackGame['cardsValues'][randomNum][0]
		}
	}
	else{
		actionPlayer['score'] += blackjackGame['cardsValues'][randomNum];
	}
}

function showScore(activePlayer){
	if(activePlayer['score'] > 21){
		document.querySelector(activePlayer['scoreSpan']).textContent = 'Bust';
		document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
	}
	else{
		document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic(){
	disableHit = true;
	while(true){
		var randomNum = Math.floor(Math.random() * 13);
		showCard(randomNum, DEALER);
		updateScore(randomNum, DEALER);
		showScore(DEALER);
		if(DEALER['score'] > 15){
			let winner = computeWinner();
			showResult(winner);
			break;
		}
		await sleep(1000);
	}
	isFinished = true;
}

function computeWinner(){
	let winner;
	if(YOU['score'] <= 21){
		if(DEALER['score'] > 21 || DEALER['score'] < YOU['score']){
			winner = YOU;
		}else if(YOU['score'] < DEALER['score']){
			winner = DEALER;
		}
	}else if(YOU['score'] > 21 && DEALER['score'] <= 21){
		winner = DEALER;
	}
	return winner;
}

function showResult(winner){
	if(winner == YOU){
		message = 'You Won!';
		messageColor = 'green';
		blackjackGame['wins']++;
		winSound.play();
	}
	else if(winner == DEALER){
		message = 'You Lost!';
		messageColor = 'red';
		blackjackGame['losses']++;
		lossSound.play();
	}
	else{
		message = 'You Drew!';
		messageColor = 'black';
		blackjackGame['ties']++;
	}
	document.querySelector('#blackjack-result').textContent = message;
	document.querySelector('#blackjack-result').style.color = messageColor;
	document.querySelector('#wins').textContent = blackjackGame['wins'];
	document.querySelector('#losses').textContent = blackjackGame['losses'];
	document.querySelector('#ties').textContent = blackjackGame['ties'];
}