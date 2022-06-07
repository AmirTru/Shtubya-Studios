function GetDataFromCalander(fromTime, toTime) {
    GetData(fromTime, toTime);
}

function SetGetCurrentTimeFromCalendar(date) {

    var year;
    var month;
    var day;

    //YYYYMMDD
    year = date.getFullYear();
    month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    //set current date to the list text
    $('.shift-date').text(day.toString() + "." + month.toString() + "." + year.toString());
    return day.toString() + "/" + month.toString() + "/" + year.toString()

}

function GetTomorrowFromCalendar(date) {

    var year;
    var month;
    var day;

    //YYYYMMDD
    year = date.getFullYear();

    if (isLastDayOfTheMonth(date)) {

        month = date.getMonth() + 2;

        if (month < 10) {
            month = "0" + month;
        }
        day = date.getDate()
        day = "01";

        return year.toString() + month.toString() + day.toString()
    } else {

        month = date.getMonth() + 1;

        if (month < 10) {
            month = "0" + month;
        }

        day = date.getDate() + 1;
        if (day < 10) {
            day = "0" + day;
        }
        return year.toString() + month.toString() + day.toString()
    }

    //console.log(year.toString() + month.toString() + day.toString());


}


function GetCurrentTimeFromCalendar(date) {

    var year;
    var month;
    var day;

    //YYYYMMDD
    year = date.getFullYear();
    month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }

    //console.log(year.toString() + month.toString() + day.toString());
    return year.toString() + month.toString() + day.toString()

}

//het and set date to Search engine
function getTodayDate(date) {

    var year;
    var month;
    var day;

    //YYYYMMDD
    year = date.getFullYear();
    
    month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    //set current date to the list text
    return day.toString() + "." + month.toString() + "." + year.toString()
}

function setTodayDate() {

    var dt = new Date();
    $('.shift-date').text(getTodayDate(dt));

}

function isLastDayOfTheMonth(date) {

    var dt = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var lastDayOfTheMonth = dt.getDate();
    var d = date.getDate();
    if (d == lastDayOfTheMonth) {
        return true
    } return false
}