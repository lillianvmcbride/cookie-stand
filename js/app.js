'use strict';

let citiesArr = [];
let hoursArr = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', 'NOON', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
let manHours = [];

function Locations(city, min, max, avg){
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg =avg;
  this.hourlyCustArr = [];
  this.hourlyCookieArr = [];
  this.workersNeededArr = [];
  this.totalStoreCookies = 0;
  this.manPower = 0;
  this.totalShifts = 0;
}

//Following functions fill store data arrays

//Method fills array of customers served each hour on this day last year for store
Locations.prototype.fillHourlyCust = function() {
  let total = 0;
  for (let i = 0; i < hoursArr.length; i++) {
    let result = Math.floor((Math.random())*(this.max-this.min)+this.min);
    this.hourlyCustArr.push(result);
    total = total + result;
  }
  this.hourlyCustArr.push(total);
};

//Method fills array of cookies served each hour on this day last year for store
Locations.prototype.fillHourlyCookie = function() {
  for (let i = 0; i < hoursArr.length; i++) {
    let cookies = this.avg*this.hourlyCustArr[i];
    cookies = Math.floor(cookies);
    this.hourlyCookieArr.push(cookies);
  }
};

//Method fills array of projected workers needed each hour for store
Locations.prototype.fillWorkersNeeded = function() {
  let bakers = 2;
  for (let i = 0; i < hoursArr.length; i++) {
    let cashiers = Math.ceil(this.hourlyCustArr[i]/20);
    this.workersNeededArr.push(cashiers + bakers);
    this.manPower += this.workersNeededArr[i];
  }
  this.totalShifts = Math.ceil(this.manPower/8);
};

//Five initial store constructors

let Seattle = new Locations ('Seattle', 23, 65, 6.3);
Seattle.fillHourlyCust();
Seattle.fillHourlyCookie();
Seattle.fillWorkersNeeded();
citiesArr.push(Seattle);

let Tokyo = new Locations ('Tokyo', 3, 24, 1.2);
Tokyo.fillHourlyCust();
Tokyo.fillHourlyCookie();
Tokyo.fillWorkersNeeded();
citiesArr.push(Tokyo);

let Dubai = new Locations ('Dubai', 11, 38, 3.7);
Dubai.fillHourlyCust();
Dubai.fillHourlyCookie();
Dubai.fillWorkersNeeded();
citiesArr.push(Dubai);

let Paris = new Locations ('Paris', 20, 38, 2.3);
Paris.fillHourlyCust();
Paris.fillHourlyCookie();
Paris.fillWorkersNeeded();
citiesArr.push(Paris);

let Lima = new Locations ('Lima', 2, 16, 4,6);
Lima.fillHourlyCust();
Lima.fillHourlyCookie();
Lima.fillWorkersNeeded();
citiesArr.push(Lima);

//Renders header row of store hours on last year's sales data table
function renderHours() {
  if (document.getElementById('hours')) {
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
}

//Renders last year's sales data for each hour for each store
Locations.prototype.renderSalesData = function() {
  if (document.getElementById('sales')) {
    let tableBody = document.getElementById('sales');
    var storeData = document.createElement('tr');
    let store = document.createElement('td');
    storeData.appendChild(store);
    store.textContent = this.city;
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
  }
};

//Renders totals row on last years sale's data table
function renderHourlyTotals() {
  if (document.getElementById('totals')) {
    let footer = document.getElementById('totals');
    let footerRow = document.createElement('tr');
    let footerLabel = document.createElement('td');
    footerLabel.textContent = 'Totals';
    footerRow.appendChild(footerLabel);
    let totalSales = 0;
    for (var i = 0; i < hoursArr.length; i++) {
      let hourlySales = document.createElement('td');
      let hourTotal = 0;
      for (var j = 0; j< citiesArr.length; j++) {
        hourTotal += citiesArr[j].hourlyCookieArr[i];
      }
      totalSales += hourTotal;
      hourlySales.textContent = hourTotal;
      footer.appendChild(footerRow);
      footerRow.appendChild(hourlySales);
    }
    var grandTotal = document.createElement('td');
    grandTotal.textContent = totalSales;
    footerRow.appendChild(grandTotal);
    footer.appendChild(footerRow);
  }
}

//Renders header row on projected workers needed table
function renderWorkHours() {
  if (document.getElementById('times')) {
    let tableHeader = document.getElementById('times');
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
    storeTotals.textContent = 'Total Full Shifts';
    headerRow.appendChild(storeTotals);
  }
}

// Renders number of workers needed each hour assuming 1 worker serves 20 customers per hour
// and two bakers are on duty at all times. Renders total workers needed assuming 8hr shifts.

Locations.prototype.renderWorkersNeeded = function() {
  if (document.getElementById('people')) {
    let tableBody = document.getElementById('people');
    var storeData = document.createElement('tr');
    let store = document.createElement('td');
    storeData.appendChild(store);
    store.textContent = this.city;
    for (let i = 0; i < this.workersNeededArr.length; i++) {
      let workers = document.createElement('td');
      workers.textContent = this.workersNeededArr[i];
      storeData.appendChild(workers);
    }
    let storeTotal = document.createElement('td');
    storeTotal.textContent = this.totalShifts;
    tableBody.appendChild(storeData);
    storeData.appendChild(storeTotal);
  }
};

//Renders totals row on projected main hours needed
function renderManHours() {
  if (document.getElementById('laborCost')) {
    let footer = document.getElementById('laborCost');
    let headerRow = document.createElement('tr');
    let empty = document.createElement('td');
    footer.appendChild(headerRow);
    headerRow.appendChild(empty);
    for (let i = 0; i < hoursArr.length; i++) {
      var hour = document.createElement('td');
      hour.textContent = hoursArr[i];
      headerRow.appendChild(hour);
    }
    let hoursTotalled = document.createElement('td');
    hoursTotalled.textContent = 'Total Man Hours';
    headerRow.appendChild(hoursTotalled);
    let realFooterRow = document.createElement('tr');
    let footerLabel = document.createElement('td');
    footerLabel.textContent = 'Man Hours';
    realFooterRow.appendChild(footerLabel);
    let totalHours = 0;
    for (let i = 0; i < hoursArr.length; i++) {
      let hourlyTotal = document.createElement('td');
      let hourTotal = 0;
      for (let j = 0; j< citiesArr.length; j++) {
        hourTotal += citiesArr[j].workersNeededArr[i];
      }
      totalHours += hourTotal;
      hourlyTotal.textContent = hourTotal;
      footer.appendChild(realFooterRow);
      realFooterRow.appendChild(hourlyTotal);
    }
    var grandTotal = document.createElement('td');
    grandTotal.textContent = totalHours;
    realFooterRow.appendChild(grandTotal);
    footer.appendChild(realFooterRow);
  }
}

//Following invocations render last year's sales table

renderHours();

Seattle.renderSalesData();
Tokyo.renderSalesData();
Dubai.renderSalesData();
Paris.renderSalesData();
Lima.renderSalesData();

renderHourlyTotals();

//Following invocations render projected workers needed table

renderWorkHours();

Seattle.renderWorkersNeeded();
Tokyo.renderWorkersNeeded();
Dubai.renderWorkersNeeded();
Paris.renderWorkersNeeded();
Lima.renderWorkersNeeded();

renderManHours();

