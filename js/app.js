'use strict';

let hoursArr = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', 'NOON', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

let seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  hourlyCustArr: [],
  hourlyCookieArr: [],
};

let tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  hourlyCustArr: [],
  hourlyCookieArr: [],
};

let dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  hourlyCustArr: [],
  hourlyCookieArr: [],
};

let paris = {
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  hourlyCustArr: [],
  hourlyCookieArr: [],
};

let lima = {
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  hourlyCustArr: [],
  hourlyCookieArr: [],
};

function setHourlyCust(min, max) {
  let result = (Math.floor(Math.random()))(max-min)+min;
  return result;
}

function setHourlyCookie(avg, cust) {
  let cookies = Math.floor(avg*cust);
  return cookies;
}

for (let i=0; i<15; i++) {
  seattle.hourlyCustArr[i] = setHourlyCust(seattle.minCust, seattle.maxCust);
}
for (let i=0; i<15; i++) {
  seattle.hourlyCookieArr[i] = setHourlyCookie(seattle.avg, seattle.hourlyCustArr[i]);
}
let prints = document.getElementbyId('seattle');
let stats = document.createElement('ul');
prints.appendChild(stats);
for (let i=0; i<15; i++) {
  let data = document.createElement('li');
  data.textContent(hoursArr[i] + ' ' + seattle.hourlyCustArr[i] + ', ' + seattle.hourlyCookieArr[i]);
  stats.appendChild(data);
}

