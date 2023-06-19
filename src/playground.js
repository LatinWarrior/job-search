const developer = {
  name: 'Me',
  salary: 100000,
  experience: 4.5,
  techStack: ['Vue', 'HTML', "CSS"],
  lookingForWork: true,
  doubleSalary() {
    this.salary = this.salary * 2;
    return this.salary;
  }
};

console.log(developer.doubleSalary());