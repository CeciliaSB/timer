import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'jquery';
import 'popper.js';
import './App.css';
import MyDigits from './digits'

let numbers =[0,0,0,0,0,0,0];
let change = 9;
let intervalID;
let f = true;

let pauseBtn = () => {
  clearInterval(intervalID);
  intervalID = null;
}

let resumeBtn = () => {
  if (f) {
    intervalID = setInterval(clock,1000)
  }
}

let resetBtn = () => {
  clearInterval(intervalID);
  numbers = [0,0,0,0,0,0,0];
  intervalID = setInterval(clock, 1000);
}

const clock = function(){

  setTimeout(function(){
    if (numbers[6] === change) {
      numbers[6] = 0;
      if (numbers[5] === change){
        numbers[5] = 0;
        if (numbers[4] === change){
          numbers[4] = 0;
          if (numbers[3] === change){
            numbers[3] = 0;
            if (numbers[2] === change){
              numbers[2] = 0;
              if (numbers[1] === change){
                numbers[1] = 0;
                if (numbers[0] === change){
                  numbers = [0,0,0,0,0,0,0];
                }
              } else {
                numbers[1]++;
              }
            } else {
              numbers[2]++;
            } 
          }  else {
            numbers[3]++;
          } 
        } else {
          numbers[4]++;
        }
      } else {
        numbers[5]++;
      }
    } else {
      numbers[6]++;
    }
  },1)




  ReactDOM.render( 
    <MyDigits six={numbers[6]} five={numbers[5]} four={numbers[4]} three={numbers[3]} two={numbers[2]} one={numbers[1]} reset={resetBtn} pause={pauseBtn} resume = {resumeBtn} />,
  document.getElementById('root')
  );


}

intervalID = setInterval(clock, 1000) 


