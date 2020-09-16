interface Student {
  readonly name: string;
  readonly age: number;
}

let student: Student = {
  name: 'ihsan',
  age: 20
}

// student.age = 22; // Cannot assign to 'age' because it is a read-only property.