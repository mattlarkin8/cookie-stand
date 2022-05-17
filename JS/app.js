'use strict';
//Array listing store hours - used in a method for each location(object)
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
  return Math.round(a+b);
}
function multiply(a,b){
  return Math.round(a*b);
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
    }
    let total = 0;
    for(let i=0;i<this.cookies[0].length;i++){
      total = sum(total,this.cookies[0][i]);
    }
    this.cookies[1].push(total);
  },

  render: function(){
    seattle.getCust();
    seattle.calcCookies();

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

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  cust: [],
  avg: 1.2,
  cookies: [[],[]],
  getCust: function(){
    for(let i=0;i<hours.length;i++){
      this.cust.push(randomCust(this.minCust,this.maxCust));
    }
  },

  calcCookies: function(){
    for(let i=0;i<this.cust.length;i++){
      this.cookies[0].push(multiply(this.cust[i],this.avg));
    }
    let total = 0;
    for(let i=0;i<this.cookies[0].length;i++){
      total = sum(total,this.cookies[0][i]);
    }
    this.cookies[1].push(total);
  },

  render: function(){
    tokyo.getCust();
    tokyo.calcCookies();

    let articleElem = document.createElement('article');
    tokyoSection.appendChild(articleElem);

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

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  cust: [],
  avg: 3.7,
  cookies: [[],[]],
  getCust: function(){
    for(let i=0;i<hours.length;i++){
      this.cust.push(randomCust(this.minCust,this.maxCust));
    }
  },

  calcCookies: function(){
    for(let i=0;i<this.cust.length;i++){
      this.cookies[0].push(multiply(this.cust[i],this.avg));
    }
    let total = 0;
    for(let i=0;i<this.cookies[0].length;i++){
      total = sum(total,this.cookies[0][i]);
    }
    this.cookies[1].push(total);
  },

  render: function(){
    dubai.getCust();
    dubai.calcCookies();

    let articleElem = document.createElement('article');
    dubaiSection.appendChild(articleElem);

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

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  cust: [],
  avg: 2.3,
  cookies: [[],[]],
  getCust: function(){
    for(let i=0;i<hours.length;i++){
      this.cust.push(randomCust(this.minCust,this.maxCust));
    }
  },

  calcCookies: function(){
    for(let i=0;i<this.cust.length;i++){
      this.cookies[0].push(multiply(this.cust[i],this.avg));
    }
    let total = 0;
    for(let i=0;i<this.cookies[0].length;i++){
      total = sum(total,this.cookies[0][i]);
    }
    this.cookies[1].push(total);
  },

  render: function(){
    paris.getCust();
    paris.calcCookies();

    let articleElem = document.createElement('article');
    parisSection.appendChild(articleElem);

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

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  cust: [],
  avg: 4.6,
  cookies: [[],[]],
  getCust: function(){
    for(let i=0;i<hours.length;i++){
      this.cust.push(randomCust(this.minCust,this.maxCust));
    }
  },

  calcCookies: function(){
    for(let i=0;i<this.cust.length;i++){
      this.cookies[0].push(multiply(this.cust[i],this.avg));
    }
    let total = 0;
    for(let i=0;i<this.cookies[0].length;i++){
      total = sum(total,this.cookies[0][i]);
    }
    this.cookies[1].push(total);
  },

  render: function(){
    lima.getCust();
    lima.calcCookies();

    let articleElem = document.createElement('article');
    limaSection.appendChild(articleElem);

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

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
