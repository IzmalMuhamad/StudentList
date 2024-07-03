const students = [];

function addStudent() {
  let student = {
    name: prompt("Enter student name: "),
    className: prompt("Enter student class: "),
    grade: parseFloat(prompt("Enter student grade: ")),
  }

  students.push(student);
  alert("Student added.");
}

function viewStudent() {
  let studentList = "Student List: \n";

  for (const student of students) {
    studentList += `${student.name} from class ${student.className}: ${student.grade.toFixed(1)}\n`;
  }

  alert(studentList);
}