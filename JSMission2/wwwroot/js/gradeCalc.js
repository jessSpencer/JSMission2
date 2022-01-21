
$("#calculate").click(
    function () {
    alert("We got here")
    let assignments = document.querySelector("#assignments").value;
    let groupProject = document.querySelector("#groupproject").value;
    let quizzes = document.querySelector("#quizzes").value;
    let exams = document.querySelector("#exams").value;
    let intex = document.querySelector("#intex").value;
    let grades = "";

    let totalgrades =
        parseFloat(assignments) * .55 +
        parseFloat(groupProject) * .05 +
        parseFloat(quizzes) * .10 +
        parseFloat(exams) * .20;
    parseFloat(intex) * .10;

    let percentage = totalgrades;
    if (percentage <= 100 && percentage >= 94) {
        grades = "A";
    } else if (percentage < 94 && percentage >= 90) {
        grades = "A-";
    } else if (percentage < 90 && percentage >= 87) {
        grades = "B+";
    } else if (percentage < 87 && percentage >= 84) {
        grades = "B";
    } else if (percentage < 84 && percentage >= 80) {
        grades = "B-";
    } else if (percentage < 80 && percentage >= 77) {
        grades = "C+";
    } else if (percentage < 77 && percentage >= 74) {
        grades = "C";
    } else if (percentage < 74 && percentage > 70) {
        grades = "C-";
    } else if (percentage < 70 && percentage >= 67) {
        grades = "D+";
    } else if (percentage < 67 && percentage >= 64) {
        grades = "D";
    } else if (percentage < 64 && percentage >= 60) {
        grades = "D-";
    } else {
        grades = "E"
        }

    alert("Your grade percentage is" + percentage + "Your grade is a" + grades)


    //if (assignments == "" || groupProject == ""
    //    || quizzes == "" || exams == "") {
    //    document.querySelector("#showdata").innerHTML
    //        = "Please enter all the fields";
    //} else {
       
    //    document.querySelector("#showdata").innerHTML =
    //        ` Your final percentage is ${percentage}%. <br> 
    //              Your grade is ${grades}.`;

    //}
}
)