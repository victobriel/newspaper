let date = document.getElementById("date");

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let dayName = weekdays[day];
date.innerText = `${dayName}, ${month + 1} ${year}`;
