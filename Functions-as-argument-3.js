'use strict';
const hazardWarningCreator = function(typeOfWarning){

  let warningCounter = 0;

  return function(location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);


  };
};

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const blizzardWarning = hazardWarningCreator('White Out, brrrr!');
const fireWarning = hazardWarningCreator('Hott in the Hills');

fireWarning('Mexico');
blizzardWarning('Michigan');
rocksWarning('Mexico');