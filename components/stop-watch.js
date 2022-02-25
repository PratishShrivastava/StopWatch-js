var tens = 00;
var seconds = 00;

var Interval;

function Start() {
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
}

function Stop() {
    clearInterval(Interval);
}

function Reset() {
    tens = "00";
    seconds = "00";
    document.getElementById("sec").innerHTML = tens;
    document.getElementById("min").innerHTML = seconds;

}


function startTimer(){
    tens++;
    if(tens<=9){
        document.getElementById("sec").innerHTML = "0" + tens;
    }
    if(tens>9){
        document.getElementById("sec").innerHTML = tens;
    }

    if(tens>99){
        seconds++;
        document.getElementById("min").innerHTML = "0" + seconds;
        tens = 0;

        document.getElementById("sec").innerHTML = "0" + 0;
        if (seconds > 9){
            document.getElementById("min").innerHTML = seconds;
        }
    }
}
    