'use strict';
const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const newArray = function(string){
  let wordArray = string.split(' ');

  return wordArray;
};

newArray(input);

const newString = function(array){
  return array.reduce((acc, word) => {
    if (word.length === 3) {
      acc += ' ';
    }
    else {
      acc += word[word.length - 1].toUpperCase();
    }
    return acc; 
  },'');

};
console.log(newString(newArray(input)));