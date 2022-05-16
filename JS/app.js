'use strict';

let hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//Access DOM
let seattleSection = document.getElementById('seattle');
let tokyoSection = document.getElementById('tokyo');
let dubaiSection = document.getElementById('dubai');
let parisSection = document.getElementById('paris');
let limaSection = document.getElementById('lima');

//Random number generation - got from mdn docs
function randomCust(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Create math functions
function sum(a,b){
  return Math.ceil(a+b);
}
function multiply(a,b){
  return Math.ceil(a*b);
}

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  cust: [],
  avg: 6.3,
  cookies: [[],[]],
  getCust: function(){
    for(let i=0;i<hours.length;i++){
      this.cust.push(randomCust(this.minCust,this.maxCust));
    }
  },

  calcCookies: function(){
    for(let i=0;i<this.cust.length;i++){
      this.cookies[0].push(multiply(this.cust[i],this.avg));
      //console.log(`i = ${i}`);
      //console.log(this.cookies[0]);
    }
    let total = 0;
    for(let i=0;i<this.cookies[0].length;i++){
      total = sum(total,this.cookies[0][i]);
      //console.log(`i = ${i}`);
      //console.log(total);
    }
    this.cookies[1].push(total);
    //console.log(this.cookies);
  },

  render: function(){
    let articleElem = document.createElement('article');
    seattleSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i=0;i<this.cookies[0].length;i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookies[0][i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.cookies[1]} cookies`;
    ulElem.appendChild(liElem);
  },
};

seattle.getCust();
seattle.calcCookies();
seattle.render();
