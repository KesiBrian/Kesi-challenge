// get inputs
const marks = prompt("enter students marks:");
// check is marks between 0 and 100
if(marks >= 0 && marks <= 100){
    function grader (){
        let grade;
        // marks statement
        if(marks > 79){
            grade = "A";
        }else if(marks >= 60 && marks <= 79){
            grade = "B";
        }else if(marks >= 50 && marks <= 59){
            grade = "C";
        }else if(marks >= 40 && marks <= 49){
            grade = "D";
        }else{
            grade = "E";
        }
        // return the grade message
        return `Your grade is ${grade}`;
    }
    // log the marks
    console.log(grader());
}else{
    console.log("Input marks between 0 and 100");
}
