class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marksOfStudent = [5, 4, 4, 5];
    this.student = true;
  }

  getInfo() {
    return `Студент ${this.course}-го курсу, ${this.university},  ${this.fullName}.`;
  }

  get marks() {
    return this.student ? this.marksOfStudent : null;
  }

  set marks(num) {
    return this.student ? this.marks.push(num) : null;
  }
  getAverageMark() {
    let getStudentAverageMark =
      this.marks.reduce((a, b) => Math.floor(a + b), 0) / this.marks.length;
    return getStudentAverageMark;
  }
  dismiss() {
    return (this.student = false);
  }
  recover() {
    return (this.student = true);
  }
}
let student = new Student(
  "Вищої Школи Психотерапії м.Одеса",
  4,
  "Остап Бендер"
);

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    setInterval(() => this.scholarship, 30000);
  }

  getScholarship() {
    return this.getAverageMark() > 4
      ? "Ви отримали 1400 грн. стипендії"
      : "Ви не отримуете стипендію";
  }
}

let budgetStudent = new BudgetStudent(
  "Вищої Школи Психотерапії м.Одеса",
  4,
  "Остап Бендер"
);

console.log(student.getInfo());
console.log(student.marks);
student.marks = 5;
console.log(student.marks);
console.log(student.getAverageMark());
student.dismiss();
console.log(student.marks);
student.recover();
console.log(student.marks);
console.log(budgetStudent.getScholarship());
