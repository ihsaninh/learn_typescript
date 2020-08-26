// with return

function getName(): string {
  return "Ihsan Nurul Habib";
}
console.log(getName());

function getAge(): number {
  return 20;
}
console.log(getAge());

// void
function sayHello(): void {
  console.log("Hello good evening");
}
sayHello();

// with arguments
function multiply(val1: number, val2: number): number {
  return val1 * val2;
}
const result = multiply(2, 5);
console.log(result);

// function as type
type Add = (val1: number, val2: number) => number;

const addNumber: Add = (val1: number, val2: number): number => {
  return val1 + val2;
}
console.log(addNumber(5, 6));

// default parameter
const fullName = (first: string, last: string = "Ucup"): string => {
  return `${first} ${last}`;
}
console.log(fullName("Robert"));

// optional parameter 
const getSchoolName = (name: string, location?: string): string => {
  return `${name} ${location}`;
}
console.log(getSchoolName('SMKN 2'));
console.log(getSchoolName('SMKN 2', 'Bogor'));