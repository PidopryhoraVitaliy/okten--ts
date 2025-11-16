"use strict";
{
    const loadedValue = localStorage.getItem('sessionsList');
    const sessionsList = (loadedValue) ? JSON.parse(loadedValue) : [];
    sessionsList.push(new Date());
    localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
}
