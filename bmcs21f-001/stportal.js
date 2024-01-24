//disyplay date
month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
day = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
var date = new Date();

var current_day = date.getDay();//check from array
var d_day = day[current_day];
var current_date = date.getDate();
var current_month = date.getMonth();//check from array
var d_month = month[current_month];
var current_year = date.getFullYear();

var display_date = d_day + ", " + current_date + " " + d_month + " " + current_year;
document.getElementById("date").innerHTML = display_date;

// Table sort on a button click - for attendance
function sortTable() {
    var table, i, x, y;
    table = document.getElementById("table");
    var swapping = true;

    // Run loop until no switching is needed
    while (swapping) {
        swapping = false;
        var rows = table.rows;

        // Loop to go through all rows
        for (i = 1; i < (rows.length - 1); i++) {
            var Swap = false;

            // Fetch 2 elements that need to be compared
            x = rows[i].getElementsByTagName("TD")[3];
            y = rows[i + 1].getElementsByTagName("TD")[3];

            // Check if 2 rows need to be switched
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
                {

                // If yes, mark Switch as needed and break loop
                Swap = true;
                break;
            }
        }
        if (Swap) {
            // Function to switch rows and mark switch as completed
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            swapping = true;
        }
    }
}

//session selection - for courses
function selectMe(){
var x = document.getElementById('session').value;

document.getElementById('sem3').style.display = "none";
document.getElementById('sem2').style.display = "none";
document.getElementById('sem1').style.display = "none";

if (x == "s3"){
    document.getElementById('sem3').style.display = "block";
}
else if (x == "s2"){
    document.getElementById('sem2').style.display = "block";
}
else if (x == "s1"){
    document.getElementById('sem1').style.display = "block";
}
}

//session selection, assessment selection - for results 
window.shown = "null";
function SelectMe(){
    var sem = document.getElementById('session').value;
    var assess = document.getElementById('assessment').value;
    document.getElementById('sem3f').style.display = "none";
    document.getElementById('sem3m').style.display = "none";
    document.getElementById('sem3qa').style.display = "none";
    document.getElementById('sem2f').style.display = "none";
    document.getElementById('sem2m').style.display = "none";
    document.getElementById('sem2qa').style.display = "none";
    document.getElementById('sem1f').style.display = "none";
    document.getElementById('sem1m').style.display = "none";
    document.getElementById('sem1qa').style.display = "none";

    if (sem == "s3"){
        if (assess == "final"){
            document.getElementById('sem3f').style.display = "block";
            window.shown = 'sem3f';
        }
        else if (assess == "mids"){
            document.getElementById('sem3m').style.display = "block";
            window.shown = 'sem3m';
        }
        else if (assess == "qa"){
            document.getElementById('sem3qa').style.display = "block";
            window.shown = 'sem3qa';
        }
    }
    else if (sem == "s2"){
        if (assess == "final"){
            document.getElementById('sem2f').style.display = "block";
            window.shown = 'sem2f';
        }
        else if (assess == "mids"){
            document.getElementById('sem2m').style.display = "block";
            window.shown = 'sem2m';
        }
        else if (assess == "qa"){
            document.getElementById('sem2qa').style.display = "block";
            window.shown = 'sem2qa';
        }
    }
    else if (sem == "s1"){
        if (assess == "final"){
            document.getElementById('sem1f').style.display = "block";
            window.shown = 'sem1f';
        }
        else if (assess == "mids"){
            document.getElementById('sem1m').style.display = "block";
            window.shown = 'sem1m';
        }
        else if (assess == "qa"){
            document.getElementById('sem1qa').style.display = "block";
            window.shown = 'sem1qa';
        }
    }
}
// Table sort on a button click - for results 
function sortTable2() {
    var table, i, x, y;
    table = document.getElementById(shown);
    var swapping = true;

    // Run loop until no switching is needed
    while (swapping) {
        swapping = false;
        var rows = table.rows;

        // Loop to go through all rows
        for (i = 1; i < (rows.length - 1); i++) {
            var Swap = false;

            // Fetch 2 elements that need to be compared
            x = rows[i].getElementsByTagName("TD")[5];
            y = rows[i + 1].getElementsByTagName("TD")[5];

            // Check if 2 rows need to be switched
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
                {

                // If yes, mark Switch as needed and break loop
                Swap = true;
                break;
            }
        }
        if (Swap) {
            // Function to switch rows and mark switch as completed
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            swapping = true;
        }
    }
}
