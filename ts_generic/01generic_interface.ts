interface Generic<T> {
  propA: T;
}

function genericFunction<T>(value: T): Generic<T> {
  let data: Generic<T> = {
    propA: value
  }

  return data;
}

console.log(genericFunction<string>('Ini Budi'));
console.log(genericFunction<number>(123));
console.log(genericFunction<boolean>(true));
