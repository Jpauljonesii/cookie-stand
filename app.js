'use strict';
let username = prompt('What is your name?');
let greeting = document.querySelector ('.greeting');
greeting.textContent= `Hi ${username}, welcome to Pat's Salmon Cookies.`;

const seattle = {
  location: 'Seattle',
  maxCust: 65,
  minCust: 23,
  avgSale: 6.3
}
const Tokyo = {
  location: 'Tokyo'
  maxCust: 24,
  minCust: 3,
  avgSale: 1.2
}
const Dubai = {
  location: 'Dubai'
  maxCust: 38,
  minCust: 11,
  avgSale: 3.7
}
const Paris = {
  location: 'Paris'
  maxCust: 38, 
  minCust: 20, 
  avgSale: 2.3
}
const Lima = {
  location: 'Lima'
  maxCust: 16, 
  minCust: 2, 
  avgSale: 4.6
}
function randomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

