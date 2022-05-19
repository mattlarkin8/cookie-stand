'use strict';
//Array listing store hours - used in a method for each location(object)
let hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//Array for constructed store objects
let stores = [];

//Access DOM
let tableSection = document.getElementById('table');
let formTable = document.getElementById('formTable');

//Random number generation - got from mdn docs
function randomCust(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Helper function - render table header
let tableElem = document.createElement('table');
tableSection.appendChild(tableElem);
let tableBody = document.createElement('tbody');
tableElem.appendChild(tableBody);
let renderTableHead = function(){

  let tableHead = document.createElement('thead');
  tableElem.appendChild(tableHead);

  let row = document.createElement('tr');
  tableHead.appendChild(row);

  let th = document.createElement('th');
  th.textContent = 'Time';
  row.appendChild(th);

  for(let i=0;i<hours.length;i++){
    let th = document.createElement('th');
    th.textContent = hours[i];
    row.appendChild(th);
  }

  th = document.createElement('th');
  th.textContent = 'Daily Location Total';
  row.appendChild(th);
};
//Helper function - render table footer
let renderTableFoot = function(){

  let tableFoot = document.createElement('tfoot');
  tableElem.appendChild(tableFoot);

  let row = document.createElement('tr');
  tableFoot.appendChild(row);

  let th = document.createElement('th');
  th.textContent = 'Hourly Total';
  row.appendChild(th);

  for(let i=0;i<hours.length;i++){
    let th = document.createElement('th');
    th.textContent = 'totals';
    row.appendChild(th);
  }

  th = document.createElement('th');
  th.textContent = 'Grand Total';
  row.appendChild(th);

  return tableFoot;
};

//Helper function - render all stores
function renderAllStores(){
  for(let i=0;i<stores.length;i++){
    stores[i].getCust();
    stores[i].calcCookies();
    stores[i].render();
  }
}

//Create math functions
function sum(a,b){
  return Math.round(a+b);
}
function multiply(a,b){
  return Math.round(a*b);
}

// for(let i=0;i<hours.length;i++){
//   let sum = 0;
//   for(let j=0;j<stores.length;j++)
// }

//Constructor functions
function Store(name,minCust,maxCust,avg){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avg = avg;
  this.cust = [];
  this.cookies = [[],[]];
  stores.push(this);
}

//Prototype Functions
Store.prototype.getCust = function(){
  for(let i=0;i<hours.length;i++){
    this.cust.push(randomCust(this.minCust,this.maxCust));
  }
};

Store.prototype.calcCookies = function(){
  for(let i=0;i<this.cust.length;i++){
    this.cookies[0].push(multiply(this.cust[i],this.avg));
  }
  let total = 0;
  for(let i=0;i<this.cookies[0].length;i++){
    total = sum(total,this.cookies[0][i]);
  }
  this.cookies[1].push(total);
};

Store.prototype.render = function(){
  let row = document.createElement('tr');
  tableBody.appendChild(row);

  let th = document.createElement('th');
  th.textContent = this.name;
  row.appendChild(th);

  for(let i=0;i<this.cookies[0].length;i++){
    let td = document.createElement('td');
    td.textContent = this.cookies[0][i];
    row.appendChild(td);
  }

  let td = document.createElement('td');
  td.textContent = this.cookies[1];
  row.appendChild(td);
};

function handleSubmit(event){
  event.preventDefault();

  let storeName = event.target.name.value;
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);
  let avg = parseInt(event.target.avg.value);

  let newStore = new Store(storeName,minCust,maxCust,avg);

  newStore.getCust();
  newStore.calcCookies();
  newStore.render();

  formTable.reset();
}

//Instantiate Stores
new Store('Seattle',23,65,6.3);
new Store('Tokyo',3,24,1.2);
new Store('Dubai',11,38,3.7);
new Store('Paris',20,38,2.3);
new Store('Lima',2,16,4.6);

renderTableHead();
renderAllStores();
renderTableFoot();

formTable.addEventListener('submit',handleSubmit);
