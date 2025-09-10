function speedDetector (){ // function name
    speed = prompt("put in your speed") // pop up window for inputing speed
    speed= Number(speed)// converts data to number

    if (speed < 70){
        alert ("OK")// if speed less than 70 alerts OK
    ;}
    else {
        let point = Math.floor ((speed - 70) / 5);// use math.floor to round numbers
        if (point > 12){
            alert ("License suspended");// if the points exceed 12 alerts license suspended
        }
        else {
            alert ("point: " + point);//shows a pop up with calculated dermit points
        }
    }
}

speedDetector();