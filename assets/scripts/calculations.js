// Calculate a Pokemon's new HP with their current maxHP + hitDie
const calculateHp = (maxHP, hitDie) => {
  let result = 0;
  // console.log(`The new HP value is: ${maxHP} + 1d${hitDie}`);
  result = maxHP + rollDice(hitDie);
  return result;
};

// Roll a die, specific to the amount of faces it has (D6,D8,D10,D12)
const rollDice = (faces) => {
  //console.log(`We're rolling a die with ${faces} faces`);
  let roll = Math.random() * (faces + 1 - 1) + 1;
  // console.log(`THE ROLL IS: ${Math.floor(roll)}`);
  return Math.floor(roll);
};

const calculateCatchDC = (sr, pkmnLevel, currentHP) => {
  let resultDC = 10 + Math.floor(sr) + pkmnLevel + Math.floor(currentHP / 10);

  return resultDC;
};

const clearInputs = () => {
  hpInput.value = '';
  srInput.value = '';
  levelInput.value = '';
  currentHPInput.value = '';
};

// handle User Input
const handleUserInputHP = () => {
  let output = '';
  let newHP = 0;

  if (!hpValue && isNaN(parseInt(hpInput.value))) {
    output = 'Please only insert a number.';
  } else {
    hpValue = parseInt(hpInput.value);
    hitDieValue = parseInt(dieList.value);

    newHP = calculateHp(hpValue, hitDieValue);
    output = `The new HP value is: ${newHP} `;
  }
  outputMessage.textContent = output;
};

const handleUserInputCatch = () => {
  let output = '';
  let sr = '';
  let level = '';
  let currHP = '';
  let catchDCResult = 0;

  if (
    !hpValue &&
    isNaN(parseInt(srInput.value)) &&
    isNaN(parseInt(levelInput.value)) &&
    isNaN(parseInt(currentHPInput.value))
  ) {
    output = 'Please only insert numbers.';
  } else {
    sr = parseInt(srInput.value);
    level = parseInt(levelInput.value);
    currHP = parseInt(currentHPInput.value);

    catchDCResult = calculateCatchDC(sr, level, currHP);
    output = catchDCResult;
  }

  catchDC.textContent = output;
};

const testFunction = () => {
  console.log('HOVERED');
  rightCol.classList.toggle('test');
};
const testFunction2 = () => {
  console.log('HOVERED');
  rightCol.classList.toggle('test');
};
