'use strict';

let hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//Access DOM
let seattleSection = document.getElementById('seattle');
console.log(seattleSection);

//Random number generation - got from mdn docs
function randomCust(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Create math functions
function sum(a,b){
  return a+b;
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
  cookies: [],
  getCust: function(){
    for(let i=0;i<hours.length;i++){
      this.cust.push(randomCust(this.minCust,this.maxCust));
    }
  },

  calcCookies: function(){
    for(let i=0;i<this.cust.length;i++){
      this.cookies.push(multiply(this.cust[i],this.avg));
    }
  },

  render: function(){
    let articleElem = document.createElement('article');
    seattleSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);
  },
};

seattle.render();
seattle.getCust();
seattle.calcCookies();
