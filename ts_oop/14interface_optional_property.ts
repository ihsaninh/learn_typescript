interface Teacher {
  name: string;
  age: number;
  phone?: string; // use ? to optional property
}

const teacher: Teacher = {
  name: 'Ihsan',
  age: 20
}