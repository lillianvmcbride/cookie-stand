'use strict';

console.log(Math.random());

let citiesArr = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
let hoursArr = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', 'NOON', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];

function Locations(city, min, max, avg){
  this.min = min;
  this.max = max;
  this.avg =avg;
  this.hourlyCustArr = [];
  this.hourlyCookieArr = [];
}

Locations.prototype.setHourlyCust = function() {
  let result = Math.floor((Math.random())*(this.max-this.min)+this.min);
  return result;
};

Locations.prototype.setHourlyCookie = function() {
  let cookies = avg*cust;
  cookies = Math.floor(cookies);
  return cookies;
};

let seattle = new Locations (23, 65, 6.3);
let tokyo = new Locations (3, 24, 1.2);
let dubai = new Locations (11, 38, 3.7);
let paris = new Locations (20, 38, 2.3);
let lima = new Locations (2, 16, 4,6);

for (let i=0; i<15; i++) {
  seattle.hourlyCustArr[i] = setHourlyCust(seattle.minCust, seattle.maxCust);
  console.log(seattle.hourlyCustArr);
}
for (let i=0; i<15; i++) {
  seattle.hourlyCookieArr[i] = setHourlyCookie(seattle.avgCookie, seattle.hourlyCustArr[i]);
}
let prints = document.getElementById('seattle');
let stats = document.createElement('ul');
prints.appendChild(stats);
for (let i=0; i<15; i++) {
  let data = document.createElement('li');
  data.textContent = (hoursArr[i] + ' ' + seattle.hourlyCustArr[i] + ' customers, ' + seattle.hourlyCookieArr[i]) + ' cookies!';
  stats.appendChild(data);
}

for (let i=0; i<15; i++) {
  tokyo.hourlyCustArr[i] = setHourlyCust(tokyo.minCust, tokyo.maxCust);
  console.log(tokyo.hourlyCustArr);
}
for (let i=0; i<15; i++) {
  tokyo.hourlyCookieArr[i] = setHourlyCookie(tokyo.avgCookie, tokyo.hourlyCustArr[i]);
}
prints = document.getElementById('tokyo');
stats = document.createElement('ul');
prints.appendChild(stats);
for (let i=0; i<15; i++) {
  let data = document.createElement('li');
  data.textContent = (hoursArr[i] + ' ' + tokyo.hourlyCustArr[i] + ' customers, ' + tokyo.hourlyCookieArr[i]) + ' cookies!';
  stats.appendChild(data);
}

for (let i=0; i<15; i++) {
  dubai.hourlyCustArr[i] = setHourlyCust(dubai.minCust, dubai.maxCust);
  console.log(dubai.hourlyCustArr);
}
for (let i=0; i<15; i++) {
  dubai.hourlyCookieArr[i] = setHourlyCookie(dubai.avgCookie, dubai.hourlyCustArr[i]);
}
prints = document.getElementById('dubai');
stats = document.createElement('ul');
prints.appendChild(stats);
for (let i=0; i<15; i++) {
  let data = document.createElement('li');
  data.textContent = (hoursArr[i] + ' ' + dubai.hourlyCustArr[i] + ' customers, ' + dubai.hourlyCookieArr[i]) + ' cookies!';
  stats.appendChild(data);
}

for (let i=0; i<15; i++) {
  paris.hourlyCustArr[i] = setHourlyCust(paris.minCust, paris.maxCust);
  console.log(paris.hourlyCustArr);
}
for (let i=0; i<15; i++) {
  paris.hourlyCookieArr[i] = setHourlyCookie(paris.avgCookie, paris.hourlyCustArr[i]);
}
prints = document.getElementById('paris');
stats = document.createElement('ul');
prints.appendChild(stats);
for (let i=0; i<15; i++) {
  let data = document.createElement('li');
  data.textContent = (hoursArr[i] + ' ' + paris.hourlyCustArr[i] + ' customers, ' + paris.hourlyCookieArr[i]) + ' cookies!';
  stats.appendChild(data);
}

for (let i=0; i<15; i++) {
  lima.hourlyCustArr[i] = setHourlyCust(lima.minCust, lima.maxCust);
  console.log(lima.hourlyCustArr);
}
for (let i=0; i<15; i++) {
  lima.hourlyCookieArr[i] = setHourlyCookie(lima.avgCookie, lima.hourlyCustArr[i]);
}
prints = document.getElementById('lima');
stats = document.createElement('ul');
prints.appendChild(stats);
for (let i=0; i<15; i++) {
  let data = document.createElement('li');
  data.textContent = (hoursArr[i] + ' ' + lima.hourlyCustArr[i] + ' customers, ' + lima.hourlyCookieArr[i]) + ' cookies!';
  stats.appendChild(data);
}
