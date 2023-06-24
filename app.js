'use strict';
const hoursOpen = ['','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', ''];

function City(location, minCust, maxCust, avgSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
}
City.prototype.randomNumberOfCustomers = function (){
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
};

let main = document.getElementById('cities');
let table = document.createElement('table');
main.appendChild(table);
let Seattle = new City('Seattle', 23, 65, 6.3);
let Tokyo = new City('Tokyo', 3, 24, 1.2);
let Dubai = new City('Dubai', 11, 38, 3.7);
let Paris = new City('Paris', 20, 38, 2.3);
let Lima = new City('Lima', 2, 16, 4.6);

let headerRow = document.createElement('tr');
table.appendChild(headerRow);
let tableBody = document.createElement('tbody');
table.appendChild(tableBody);
for (let i = 0; i < hoursOpen.length - 1; i++) {
  let header = document.createElement('th');
  header.textContent = hoursOpen[i];
  headerRow.appendChild(header);
  if (i === hoursOpen.length - 2) {
    let totalTh = document.createElement('th');
    totalTh.innerText = 'Daily Location Total';
    headerRow.appendChild(totalTh);
  }
}

const cityArray = [];
City.prototype.render = function () {
  let totalSales = 0;
  let cityDataRow = document.createElement('tr');
  tableBody.appendChild(cityDataRow);
  cityDataRow.id = this.location;
  let dateRow = document.createElement('td');
  cityDataRow.appendChild(dateRow);
  dateRow.innerText = this.location;
  const citySales = [];

  for (let i = 0; i < hoursOpen.length - 2; i++) {
    let hourlySales = Math.floor(this.randomNumberOfCustomers() * this.avgSale);
    citySales.push(hourlySales);
    let td = document.createElement('td');
    td.innerText = hourlySales;
    cityDataRow.appendChild(td);
    totalSales += hourlySales;
    if (i === 14) {
      let totalTh = document.createElement('td');
      totalTh.innertext = totalSales;
      cityDataRow.appendChild(totalTh);
    }
  }
  cityArray.push(citySales);
};

function footerFunction() {
  let td = document.createElement('td');
  td.innerText = 'Totals';
  let tfoot = document.createElement('tfoot');
  table.appendChild(tfoot);
  let tr = document.createElement('tr');
  tfoot.appendChild(tr);
  tr.appendChild(td);
  const totalOfTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < 14; i++){
    for (let j = 0; j < cityArray.length; j++){
      totalOfTotals[i] += cityArray[j][i];
    }
  }
  for (let i = 0; i < totalOfTotals.length; i++){
    let td = document.createElement('td');
    td.innerText = totalOfTotals[i];
    tr.appendChild(td);
  }
  const sum = totalOfTotals.reduce((acc,curr) => {
    return acc + curr;
  },0);
  td = document.createElement('td');
  td.innerText = sum;
  tr.appendChild(td);
}

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
footerFunction();
