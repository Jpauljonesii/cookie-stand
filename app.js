'use strict';
const hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

const Seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  randomNumberOfCustomers: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
  }
};
const Tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  randomNumberOfCustomers: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
  }
};
const Dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  randomNumberOfCustomers: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
  }
};
const Paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  randomNumberOfCustomers: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
  }
};
const Lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  randomNumberOfCustomers: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
  }
};


function cookieCount(city) {
  let h2 = document.createElement('h2');
  h2.innerText = city.location;
  let main = document.getElementById('cities');
  main.appendChild(h2);
  let ul = document.createElement('ul');
  main.appendChild(ul);
  let totalSales = 0;
  for (let i = 0; i < hoursOpen.length; i++) {
    let li = document.createElement('li');
    let hourlySales = Math.floor(
      city.randomNumberOfCustomers() * city.avgSale
    );
    totalSales += hourlySales;
    console.log(totalSales);
    li.innerText = `${hoursOpen[i]}: ${hourlySales} cookies`;
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
