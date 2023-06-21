'use strict';
let username = prompt('What is your name?');
let greeting = document.querySelector ('.greeting');
greeting.textContent= `Hi ${username}, welcome to Pat's Salmon Cookies.`;

const hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

const Seattle = {
  location: 'Seattle',
  maxCust: 65,
  minCust: 23,
  avgSale: 6.3,
  randomNumofCustomers: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  }
};
const Tokyo = {
  location: 'Tokyo',
  maxCust: 24,
  minCust: 3,
  avgSale: 1.2,
  randomNumofCustomers: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  }
};
const Dubai = {
  location: 'Dubai',
  maxCust: 38,
  minCust: 11,
  avgSale: 3.7,
  randomNumofCustomers: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  }
};
const Paris = {
  location: 'Paris',
  maxCust: 38, 
  minCust: 20, 
  avgSale: 2.3,
  randomNumofCustomers: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  }
};
const Lima = {
  location: 'Lima',
  maxCust: 16, 
  minCust: 2, 
  avgSale: 4.6,
  randomNumofCustomers: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  }
};


function cookieCount(city){
  let h2 = document.createElement('h2');
  h2.innerText = city.name;
  let main = document.getElementById('cities');
  main.appendChild(h2);
  let ul = document.createElement('ul');
  main.appendChild(ul);
  let totalSales = 0;
  for (let i=0; i <= hoursOpen.length; i++){
    let li = document.createElement('li');
    let hourlySales = Math.floor(city.randomNumofCustomers() * city.avgCookieSales);
    totalSales += hourlySales;
    li.innerText = totalSales;
    ul.appendChild(li);
  }
  let total = document.createElement('li');
  total.innerText = `Total: ${totalSales} cookies`;
  ul.appendChild(total);
}



cookieCount(Seattle);
cookieCount(Tokyo);
cookieCount(Dubai);
cookieCount(Paris);
cookieCount(Lima);
