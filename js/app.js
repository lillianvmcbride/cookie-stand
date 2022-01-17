'use strict';

let citiesArr = [];
let cityTotals = [];
let hoursArr = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', 'NOON', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
var storeTable = document.getElementById('table');

function Locations(city, min, max, avg){
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg =avg;
  this.hourlyCustArr = [];
  this.hourlyCookieArr = [];
  this.totalStoreCookies = 0;
}

Locations.prototype.fillHourlyCust = function() {
  let total = 0;
  for (let i=0; i<15; i++) {
    let result = Math.floor((Math.random())*(this.max-this.min)+this.min);
    this.hourlyCustArr.push(result);
    total = total + result;
  }
  this.hourlyCustArr.push(total);
};

Locations.prototype.fillHourlyCookie = function() {
  for (let i=0; i<15; i++) {
    let cookies = this.avg*this.hourlyCustArr[i];
    cookies = Math.floor(cookies);
    this.hourlyCookieArr.push(cookies);
  }
};

let Seattle = new Locations (23, 65, 6.3);
Seattle.fillHourlyCust();
Seattle.fillHourlyCookie();
citiesArr.push(Seattle);

let Tokyo = new Locations (3, 24, 1.2);
Tokyo.fillHourlyCust();
Tokyo.fillHourlyCookie();
citiesArr.push(Tokyo);

let Dubai = new Locations (11, 38, 3.7);
Dubai.fillHourlyCust();
Dubai.fillHourlyCookie();
citiesArr.push(Dubai);

let Paris = new Locations (20, 38, 2.3);
Paris.fillHourlyCust();
Paris.fillHourlyCookie();
citiesArr.push(Paris);

let Lima = new Locations (2, 16, 4,6);
Lima.fillHourlyCust();
Lima.fillHourlyCookie();
citiesArr.push(Lima);

console.log(citiesArr);

function renderHours() {
  let tableHeader = document.getElementById('hours');
  let headerRow = document.createElement('tr');
  let empty = document.createElement('td');
  tableHeader.appendChild(headerRow);
  headerRow.appendChild(empty);
  empty.textContent = '      ';
  for (let i=0; i<hoursArr.length; i++) {
    let hour = document.createElement('td');
    hour.textContent = hoursArr[i];
    headerRow.appendChild(hour);
  }
}

renderHours();

// renderData = function() {
//   let table = document.getElementById('sales');
//   let storeData = document.createElementById('tr')
//   table.appendChild(storeData);
// for ()
// let data = document.createElementById('td')
// }

// hourlyTotalsRow = function() {

// }

// let prints = document.getElementById('seattle');
// let stats = document.createElement('ul');
// prints.appendChild(stats);
// for (let i=0; i<15; i++) {
//   let data = document.createElement('li');
//   data.textContent = (hoursArr[i] + ' ' + seattle.hourlyCustArr[i] + ' customers, ' + seattle.hourlyCookieArr[i]) + ' cookies!';
//   stats.appendChild(data);
// }
// }

// renderHours()
