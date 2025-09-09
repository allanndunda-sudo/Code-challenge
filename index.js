function grade(){
    let marks = prompt("input marks");// pop up a window
    marks = Number(marks);// convert into a number, mark is a number not string

    if (marks > 79 && marks <= 100) {
        return "A";}
    else if (marks > 60) {
        return "B";}
    else if (marks > 49) {
        return "C";}
    else if (marks > 40) {
        return "E";}
        else if (marks > 0){
            return "Fail";}// greater than zero but less than 40
    else { return "Invalid input"};// anything else is an error
}
alert(grade());
