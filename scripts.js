// display date
var today = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// set date variables, beginning with today's date
var currentDay = today.getDate();
var currentMonth = today.getMonth();
var currentMonthName = months[today.getMonth()];
var currentYear = today.getFullYear();

// set constant variables for today's date
var todaysDate = currentDay;
var todaysMonth = currentMonth;
var todaysMonthName = currentMonthName;
var todaysYear = currentYear;

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function showPreviousMonth() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;

    // delete outdated cells in calendar
    var tbl = document.getElementById("calendar-body");
    tbl.innerHTML = "";

    // repopulate calendar
    showCalendar(currentMonth, currentYear);
}

function showNextMonth() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;

    // delete outdated cells in calendar
    var tbl = document.getElementById("calendar-body");
    tbl.innerHTML = "";

    // repopulate calendar
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let tbl = document.getElementById("calendar-body");

    // display month and year
    document.getElementById("calendar-header").innerHTML = months[month] + " " + year;

    // get first day of week
    var firstDay = (new Date(year, month)).getDay();
    
    // check how many days in month
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    // populate calendar
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        // create individual cells and fill with data
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else if (currentDay > date && todaysMonth == currentMonth && todaysYear == currentYear || todaysMonth > currentMonth && todaysYear >= currentYear || todaysYear > currentYear) {
                cell = document.createElement("td");
                cellText = document.createTextNode(date);
                cellImage = document.createElement("img");
                cellImage.src = 'http://i.piccy.info/i7/c7a432fe0beb98a3a66f5b423b430423/1-5-1789/1066503/lol.png';
                cellImage.classList.add("crossed-date");
                cell.appendChild(cellText);
                cell.appendChild(cellImage);
                row.appendChild(cell);
                date++;
            }

            else if (date == todaysDate && todaysMonth == currentMonth && todaysYear == currentYear) {
                cell = document.createElement("td");
                cell.classList.add("todays-date");
                cellText = document.createTextNode(date);
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }

            else {
                cell = document.createElement("td");
                cellText = document.createTextNode(date);
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // append each row into calendar
    }

}