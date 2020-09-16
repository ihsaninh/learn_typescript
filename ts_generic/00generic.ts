function getData(value: any) {
  return value;
}

const data1 = getData('21331');
console.log(data1);

// ---------- GENERIC ----------

function getData2<T>(value: T) {
  return value;
}

const data2 = getData2<string>('budi');
console.log(data2);

const data3 = getData2<number>(123);
console.log(data3.toFixed(2));