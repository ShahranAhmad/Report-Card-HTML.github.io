function takeInput() {
    var m1, m2, m3, m4, m5
    m1 = document.getElementById("mark-1").value
    m2 = document.getElementById("mark-2").value
    m3 = document.getElementById("mark-3").value
    m4 = document.getElementById("mark-4").value
    m5 = document.getElementById("mark-5").value
    var total = m1 + "+" + m2 + "+" + m3 + "+" + m4 + "+" + m5
    var total_marks = eval(total)
    // alert(total_marks)
    var percentage = total_marks / 5
    // alert(percentage+" %")
    var grade
    if (m1 < 0 || m1 > 100 || m2 < 0 || m2 > 100 || m3 < 0 || m3 > 100 || m4 < 0 || m4 > 100 || m5 < 0 && m5 > 100) {
        alert("Invalid Entry!!! Fill the marks again")
    }
    else {
        if (percentage <= 100 && percentage >= 91) {
            grade = "A+"
        }
        else if (percentage < 91 && percentage >= 81) {
            grade = "A"
        }
        else if (percentage < 81 && percentage >= 71) {
            grade = "B+"
        }
        else if (percentage < 71 && percentage >= 61) {
            grade = "B"
        }
        else if (percentage < 61 && percentage >= 51) {
            grade = "C"
        }
        else if (percentage < 51 && percentage >= 41) {
            grade = "D"
        }
        else if (percentage < 33 && percentage >= 41) {
            grade = "P"
        }
        else {
            grade = "F"
        }
    }
    document.getElementById("final-report").style.display = "block"
    document.getElementById("btn-3").style.display = "block"

    document.getElementById("std-det-1").innerHTML = document.getElementById("std-name").value
    document.getElementById("std-det-2").innerHTML = document.getElementById("std-class").value
    document.getElementById("std-det-3").innerHTML = document.getElementById("std-rollno").value

    document.getElementById("m-1").innerHTML = document.getElementById("mark-1").value
    document.getElementById("m-2").innerHTML = document.getElementById("mark-2").value
    document.getElementById("m-3").innerHTML = document.getElementById("mark-3").value
    document.getElementById("m-4").innerHTML = document.getElementById("mark-4").value
    document.getElementById("m-5").innerHTML = document.getElementById("mark-5").value

    document.getElementById("g-1").innerHTML = document.getElementById("grade-1").value
    document.getElementById("g-2").innerHTML = document.getElementById("grade-2").value
    document.getElementById("g-3").innerHTML = document.getElementById("grade-3").value

    document.getElementById("final-1").innerHTML = total_marks
    document.getElementById("final-2").innerHTML = percentage
    document.getElementById("final-3").innerHTML = grade

}

function hidePreview() {
    document.getElementById("final-report").style.display = "none"
    document.getElementById("btn-3").style.display = "none"
}

function confirmReport(){
    document.getElementById("raw-data").style.display = "none"
    document.getElementById("btn-4").style.display = "block"
    document.getElementById("btn-3").style.display = "none"
}

function printReport(){
    document.getElementById("btn-4").style.display = "none"
    window.print()
}
