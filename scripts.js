// display date
var today = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var currentDay = today.getDate();
var currentMonth = today.getMonth();
var currentMonthName = months[today.getMonth()];
var currentYear = today.getFullYear()

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear)

function showCalendar(month, year) {

    let tbl = document.getElementById("calendar-body")

    // display month and year
    document.getElementById("calendar-header").innerHTML = currentMonthName + " " + currentYear;

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
                cell.classList.add("date-number");
            }
            else if (date > daysInMonth) {
                break;
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