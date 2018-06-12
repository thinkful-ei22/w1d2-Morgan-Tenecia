'use strict';
const turtleStepsArray = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const filteredArray = turtleStepsArray.filter(function(arr){
  return arr[0] >= 0 && arr[1] >= 0;
});

const turtleDistanceNinja = turtleStepsArray.map(arr => arr[0] + arr[1]);

turtleDistanceNinja.forEach(num => console.log(`Turtle took ${num} steps.`));

//console.log(filteredArray);
//console.log(turtleDistanceNinja);
//console.log(logTotalSteps);



