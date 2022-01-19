'use strict';

let citiesArr = [];
let grandTotal = 0;
let hoursArr = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', 'NOON', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];

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

let Seattle = new Locations ('Seattle', 23, 65, 6.3);
Seattle.fillHourlyCust();
Seattle.fillHourlyCookie();
citiesArr.push(Seattle);

let Tokyo = new Locations ('Tokyo', 3, 24, 1.2);
Tokyo.fillHourlyCust();
Tokyo.fillHourlyCookie();
citiesArr.push(Tokyo);

let Dubai = new Locations ('Dubai', 11, 38, 3.7);
Dubai.fillHourlyCust();
Dubai.fillHourlyCookie();
citiesArr.push(Dubai);

let Paris = new Locations ('Paris', 20, 38, 2.3);
Paris.fillHourlyCust();
Paris.fillHourlyCookie();
citiesArr.push(Paris);

let Lima = new Locations ('Lima', 2, 16, 4,6);
Lima.fillHourlyCust();
Lima.fillHourlyCookie();
citiesArr.push(Lima);

function renderHours() {
  let tableHeader = document.getElementById('hours');
  let headerRow = document.createElement('tr');
  let empty = document.createElement('td');
  tableHeader.appendChild(headerRow);
  headerRow.appendChild(empty);
  for (let i = 0; i < hoursArr.length; i++) {
    var hour = document.createElement('td');
    hour.textContent = hoursArr[i];
    headerRow.appendChild(hour);
  }
  let storeTotals = document.createElement('td');
  storeTotals.textContent = 'Daily Store Total';
  headerRow.appendChild(storeTotals);
}

Locations.prototype.renderData = function() {
  let tableBody = document.getElementById('sales');
  var storeData = document.createElement('tr');
  let store = document.createElement('td');
  // storeData.appendChild(store);
  store.textContent = this.city;
  storeData.appendChild(store);
  for (let i = 0; i < this.hourlyCookieArr.length; i++) {
    let data = document.createElement('td');
    data.textContent = this.hourlyCookieArr[i];
    this.totalStoreCookies = this.totalStoreCookies + this.hourlyCookieArr[i];
    storeData.appendChild(data);
  }
  let storeTotal = document.createElement('td');
  storeTotal.textContent = this.totalStoreCookies;
  tableBody.appendChild(storeData);
  storeData.appendChild(storeTotal);
};

function renderHourlyTotals() {

}

renderHours();

Seattle.renderData();
Tokyo.renderData();
Dubai.renderData();
Paris.renderData();
Lima.renderData();

// renderHourlyTotals();

