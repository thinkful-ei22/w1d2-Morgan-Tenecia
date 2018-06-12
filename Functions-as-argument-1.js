'use strict';
const repeat = function (fn,n){

  for ( let i = 0; i < n; i++){
    fn();
  }

    

};

const hello = function (){
  console.log('Hello world');

};

const goodbye = function (){
  console.log('Goodbye world');
};

repeat(goodbye,5);