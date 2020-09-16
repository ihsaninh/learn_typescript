class Animal3 {
  nama: string = '';
  kaki: number = 0;
  animal: boolean = false;

  bernafas() {
    console.log(`${this.nama} sedang bernafas`);
  }
}

const animal3 = new Animal3();
console.log(animal3)

animal3.nama = 'kucing';
animal3.kaki = 3;

animal3.bernafas();
console.log(animal3)