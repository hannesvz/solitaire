const suits = ['club', 'heart', 'diamond', 'spade'];
const numbers = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'j', 'q', 'k'];
const startpower = 7;
const gravity = 0.8;

let stackpadding = 10;

let cardscale = 1;

let bgimg;
let cards = {};
let cardwidth = 138,
  cardheight = 184;

let stack = new Array(4).fill(numbers.length - 1);
let activestack = 0;

function preload() {
  if (window.innerWidth < (stackpadding + (cardwidth * 4))) {
    cardwidth *= 0.5;
    cardheight *= 0.5;
    stackpadding = 5;
  }  
  
  for (let i in suits) {
    cards[suits[i]] = [];
    for (let j in numbers) {
      let card = 'assets/' + suits[i] + '_' + numbers[j] + '.png';
      let face = suits[i] + '_' + numbers[j];
      // the i - 1 here is for 4 suits, divided by 2, offset by 1.
      let tx = ((window.innerWidth / 2) - cardwidth) + ((i - 1) * (cardwidth + stackpadding));
      let cardimg = new Card(tx, 30, face, i);
      cards[suits[i]].push(cardimg);
    }
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function setup() {
  frameRate(60);
  createCanvas(window.innerWidth, window.innerHeight);
  windowResized();

//   if (window.innerWidth < (stackpadding + (cardwidth * 5))) {
//     }
  
  // draw the initial 4 cards
  for (let c = 0; c < 4; c++) {
    let currentcard = cards[suits[c]][12];
    currentcard.draw();
  }
}

function draw() {
  let currentcard = cards[suits[activestack]][stack[activestack]];
  currentcard.update();
  currentcard.draw();
}