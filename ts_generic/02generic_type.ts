type Generic2<T> = T;

function genericFunction2<T>(value: T): Generic2<T> {
  return value;
}

console.log(genericFunction2<string>('Ini String'));
console.log(genericFunction2<number>(123));
console.log(genericFunction2<boolean>(true));