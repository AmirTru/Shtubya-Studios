const KEY_theDiamond = "72230";
const KEY_flyingSquares = "76774";
const KEY_phaseZero = "79999";
const KEY_molecule = "68503";
const KEY_darkMode = "70715";
const KEY_goldenRatio = "68266";
const KEY_purpleHaze = "71636";
const KEY_valhallaLounge = "80684";
const KEY_zebra = "81836";

const RED_color = "red";
const BLUE_color = "blue";

var toDay = new Date();

var toDay_YYYYMMDD = GetCurrentTimeYYYYMMDD(toDay);
var Tomorrow_YYYYMMDD = GetTomorrowTimeYYYYMMDD(toDay);

const key = "MLggjSx6IfNHNLxdNyUjrzGGIRTfdRrM";

const siteid = "5442"

const apiSecret = "Uz2t5tfrIRcks0Ar76We89f7IH715Gx"

const GetData = (fromTime, toTime) => {

    var toDay = new Date();

    var dt = GetCurrentTimeYYYYMMDDHH(toDay);

    var keyForSh = siteid + key + dt + "apptlist" + apiSecret;

    //hash it 
    var sh = SHA256(keyForSh);

    //complete url 
    var url = "https://www.tor4you.co.il/api/apptlist?siteid=" +
        siteid + "&key=" + key +  // key's
        "&dt=" + dt + "&from=" + fromTime + "&to=" + toTime + //this Time + appointment Time 
        "&sh=" + sh; // hash code's

    //Create a request variable and assign a new XMLHttpRequest object to it
    const request = new XMLHttpRequest();

    //open a GET req 
    request.open("GET", url);

    //When the 'API request loads, do the following...
    request.onload = () => {

        //convert request to obj 
        const data = JSON.parse(request.response);

        // Status 200 = Success. Status 400 = Problem.  This says if it's successful and no problems, then execute 
        if (request.status >= 200 && request.status < 400) {

            // check with tor4you Status 1 = Success. Status 0 = Problem 
            if (data.status == 1) {

                //get shifts time according to tor4you
                const morningShift = fromTime + "0500" //stends for 05:00
                const eveningShift = fromTime + "1700" //stends for 17:00

                //paint indicators in blue
                paintShiftFree("m-valhalla-lounge", "e-valhalla-lounge");
                paintShiftFree("m-zebra", "e-zebra");
                paintShiftFree("m-dark-mode", "e-dark-mode");
                paintShiftFree("m-purple-haze", "e-purple-haze");
                paintShiftFree("m-the-diamond", "e-the-diamond");
                paintShiftFree("m-molecule", "e-molecule");
                paintShiftFree("m-flying-squares", "e-flying-squares");
                paintShiftFree("m-golden-ratio", "e-golden-ratio");
                paintShiftFree("m-phase-zero", "e-phase-zero");

                //iterate 
                data.appts.forEach(function (index) {
                    const morning = "m-";
                    const evening = "e-";
                    //chcking in which studio we are (studios are stuff in tor4you)
                    switch (index.staff) {
                        case KEY_theDiamond:
                            if (index.from == morningShift) {
                                paintShiftBusy("m-the-diamond",morning);
                            }
                            if (index.from == eveningShift) {
                                paintShiftBusy("e-the-diamond",evening);
                            }
                            break;
                        case KEY_flyingSquares:
                            if (index.from == morningShift) {
                                paintShiftBusy("m-flying-squares",morning);
                            }
                            if (index.from == eveningShift) {
                                paintShiftBusy("e-flying-squares",evening);
                            }
                            break;
                        case KEY_phaseZero:
                            if (index.from == morningShift) {
                                paintShiftBusy("m-phase-zero",morning);
                            }
                            if (index.from == eveningShift) {
                                paintShiftBusy("e-phase-zero",evening);
                            }
                            break;
                        case KEY_molecule:
                            if (index.from == morningShift) {
                                paintShiftBusy("m-molecule",morning);
                            }
                            if (index.from == eveningShift) {
                                paintShiftBusy("e-molecule",evening);
                            }
                            break;
                        case KEY_darkMode:
                            if (index.from == morningShift) {
                                paintShiftBusy("m-dark-mode",morning);
                            }
                            if (index.from == eveningShift) {
                                paintShiftBusy("e-dark-mode",evening);
                            }
                            break;
                        case KEY_goldenRatio:
                            if (index.from == morningShift) {
                                paintShiftBusy("m-golden-ratio",morning);
                            }
                            if (index.from == eveningShift) {
                                paintShiftBusy("e-golden-ratio",evening);
                            }
                            break;
                        case KEY_purpleHaze:
                            if (index.from == morningShift) {
                                paintShiftBusy("m-purple-haze",morning);
                            }
                            if (index.from == eveningShift) {
                                paintShiftBusy("e-purple-haze",evening);
                            }
                            break;
                        case KEY_valhallaLounge:
                            if (index.from == morningShift) {
                                paintShiftBusy("m-valhalla-lounge",morning);
                            }
                            if (index.from == eveningShift) {
                                paintShiftBusy("e-valhalla-lounge",evening);
                            }
                            break;
                        case KEY_zebra:
                            if (index.from == morningShift) {
                                paintShiftBusy("m-zebra",morning);
                            }
                            if (index.from == eveningShift) {
                                paintShiftBusy("e-zebra",evening);
                            }
                            break;
                    }
                });
            } else {
                console.log(data.message + " - " + dt);

            }
        } else {
            console.log("Api error (not in tor4you)");
        }

    };
    request.send();
};

GetData(toDay_YYYYMMDD, Tomorrow_YYYYMMDD);

function paintShiftBusy(id, morningOrEvening) {
    if (document.getElementById(id)) {
        document.getElementById(id).style.transition = "all 0.5s";
        $(id).addClass(morningOrEvening + 'busy');
        console.log(morningOrEvening + 'busy')
    }
}

function paintShiftFree(morningId, eveningId) {

    var morningDiv = document.getElementById(morningId);
    var eveningDiv = document.getElementById(eveningId);

    //check if not null (could be filterd) paint indicators in blue
    if (morningDiv) { $(morningDiv).removeClass('m-busy'); }
    if (eveningDiv) { $(eveningDiv).removeClass('e-busy'); }
}

function GetCurrentTimeYYYYMMDDHH(today) {

    var year = today.getFullYear();
    var month = today.getMonth() + 1;

    if (month < 10) {
        month = "0" + month;
    }

    var day = today.getDate();

    if (day < 10) {
        day = "0" + day;
    }

    var hour = today.getHours();

    if (hour < 10) {
        hour = "0" + hour;
    }

    var minute = today.getMinutes();

    if (minute < 10) {
        minute = "0" + minute;
    }


    var currentTime = year + "" + month + "" + day + "" + hour + "" + minute;

    return currentTime;
}

function GetCurrentTimeYYYYMMDD(today) {

    var year = today.getFullYear();
    var month = today.getMonth() + 1;

    if (month < 10) {
        month = "0" + month;
    }

    var day = today.getDate();

    if (day < 10) {
        day = "0" + day;
    }

    var hour = today.getHours();

    if (hour < 10) {
        hour = "0" + hour;
    }

    var currentTime = year + "" + month + "" + day;

    return currentTime;
}

function GetTomorrowTimeYYYYMMDD(today) {

    //check if last day of the month
    var d = new Date(today);
    if (d == 0) { console.log("last day of the month") }

    var year = today.getFullYear();
    var month = today.getMonth() + 1;

    if (month < 10) {
        month = "0" + month;
    }

    var day = today.getDate() + 1;

    if (day < 10) {
        day = "0" + day;
    }

    var hour = today.getHours();

    if (hour < 10) {
        hour = "0" + hour;
    }

    var currentTime = year + "" + month + "" + day;

    return currentTime;
}

