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

            // check with tor4you Status 1 = Success. Status 2 = Problem 
            if (data.status == 1) {

                //get shifts time according to tor4you
                const morningShift = fromTime + "0500" //stends for 05:00
                const eveningShift = fromTime + "1700" //stends for 17:00

                //paint indicators in blue
                document.getElementById("m-valhalla-lounge").style.backgroundColor = BLUE_color;
                document.getElementById("e-valhalla-lounge").style.backgroundColor = BLUE_color;
                document.getElementById("m-zebra").style.backgroundColor = BLUE_color;
                document.getElementById("e-zebra").style.backgroundColor = BLUE_color;
                document.getElementById("m-dark-mode").style.backgroundColor = BLUE_color;
                document.getElementById("e-dark-mode").style.backgroundColor = BLUE_color;
                document.getElementById("m-purple-haze").style.backgroundColor = BLUE_color;
                document.getElementById("e-purple-haze").style.backgroundColor = BLUE_color;
                document.getElementById("m-the-diamond").style.backgroundColor = BLUE_color;
                document.getElementById("e-the-diamond").style.backgroundColor = BLUE_color;
                document.getElementById("m-molecule").style.backgroundColor = BLUE_color;
                document.getElementById("e-molecule").style.backgroundColor = BLUE_color;
                document.getElementById("m-flying-squares").style.backgroundColor = BLUE_color;
                document.getElementById("e-flying-squares").style.backgroundColor = BLUE_color;
                document.getElementById("m-golden-ratio").style.backgroundColor = BLUE_color;
                document.getElementById("e-golden-ratio").style.backgroundColor = BLUE_color;
                document.getElementById("m-phase-zero").style.backgroundColor = BLUE_color;
                document.getElementById("e-phase-zero").style.backgroundColor = BLUE_color;


                //iterate 
                data.appts.forEach(function (index) {

                    //chcking in which studio we are (studios are stuff in tor4you)
                    switch (index.staff) {
                        case KEY_theDiamond:
                            if (index.from == morningShift) {
                                paintRedWithAni("m-the-diamond");
                            }
                            if (index.from == eveningShift) {
                                paintRedWithAni("e-the-diamond");
                            }
                            break;
                        case KEY_flyingSquares:
                            if (index.from == morningShift) {
                                paintRedWithAni("m-flying-squares");
                            }
                            if (index.from == eveningShift) {
                                paintRedWithAni("e-flying-squares");
                            }
                            break;
                        case KEY_phaseZero:
                            if (index.from == morningShift) {
                                paintRedWithAni("m-phase-zero");
                            }
                            if (index.from == eveningShift) {
                                paintRedWithAni("e-phase-zero");
                            }
                            break;
                        case KEY_molecule:
                            if (index.from == morningShift) {
                                paintRedWithAni("m-molecule");
                            }
                            if (index.from == eveningShift) {
                                paintRedWithAni("e-molecule");
                            }
                            break;
                        case KEY_darkMode:
                            if (index.from == morningShift) {
                                paintRedWithAni("m-dark-mode");
                            }
                            if (index.from == eveningShift) {
                                paintRedWithAni("e-dark-mode");
                            }
                            break;
                        case KEY_goldenRatio:
                            if (index.from == morningShift) {
                                paintRedWithAni("m-golden-ratio");
                            }
                            if (index.from == eveningShift) {
                                paintRedWithAni("e-golden-ratio");
                            }
                            break;
                        case KEY_purpleHaze:
                            if (index.from == morningShift) {
                                paintRedWithAni("m-purple-haze");
                            }
                            if (index.from == eveningShift) {
                                paintRedWithAni("e-purple-haze");
                            }
                            break;
                        case KEY_valhallaLounge:
                            if (index.from == morningShift) {
                                paintRedWithAni("m-valhalla-lounge");
                            }
                            if (index.from == eveningShift) {
                                paintRedWithAni("e-valhalla-lounge");
                            }
                            break;
                        case KEY_zebra:
                            if (index.from == morningShift) {
                                paintRedWithAni("m-zebra");
                            }
                            if (index.from == eveningShift) {
                                paintRedWithAni("e-zebra");
                            }
                            break;
                    }
                });
            } else {
                console.log(data.message);
            }
        } else {
            console.log("Api error (not in tor4you)");
        }

    };
    request.send();
};

GetData(toDay_YYYYMMDD, Tomorrow_YYYYMMDD);

function paintRedWithAni(id) {
    document.getElementById(id).style.transition = "all 0.5s";
    document.getElementById(id).style.backgroundColor = RED_color;
}

function GetCurrentTimeYYYYMMDDHH(today){

    var year = today.getFullYear();
    var month = today.getMonth()+1;

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

function GetCurrentTimeYYYYMMDD(today){

    var year = today.getFullYear();
    var month = today.getMonth()+1;

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

function GetTomorrowTimeYYYYMMDD(today){

    var year = today.getFullYear();
    var month = today.getMonth()+1;

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