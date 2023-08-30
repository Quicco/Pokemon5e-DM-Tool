let hitDieValue = '';
let calcResult = '';
let hpValue = '';

// HTML element variables for the new HP calculator
const hpInput = document.getElementById('hp-input');
const dieList = document.getElementById('die-list');
const calculateBtn = document.getElementById('calculate-btn');
const outputMessage = document.getElementById('output-message');

// HTML element variables for the catch DC calculator
const srInput = document.getElementById('sr-input');
const levelInput = document.getElementById('lvl-input');
const currentHPInput = document.getElementById('currenthp-input');
const calculateCatchDCBtn = document.getElementById('catch-btn');
const catchDC = document.getElementById('catch-dc');

// HTML elemt variables for the left and right columns
const leftCol = document.getElementById('left-col');
const rightCol = document.getElementById('right-col');

// Events
calculateBtn.addEventListener('click', handleUserInputHP);
calculateCatchDCBtn.addEventListener('click', handleUserInputCatch);
leftCol.addEventListener('focus', testFunction);
// leftCol.addEventListener('mouseleave', testFunction2);
rightCol;

/*TO DO 
[X] - Create variables for the left and right columns divs
[] - Add event handlers for those divs: when you hover over the left column, the right one goes a bit less opaque */
