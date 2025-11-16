"use strict";
const loadedValue = localStorage.getItem('sessionsList');
const sessionsList = (loadedValue) ? JSON.parse(loadedValue) : [];
const ol = document.getElementById('sessionsList');
for (const sessionData of sessionsList) {
    const li = document.createElement('li');
    li.innerText = sessionData.toString();
    ol.appendChild(li);
}
