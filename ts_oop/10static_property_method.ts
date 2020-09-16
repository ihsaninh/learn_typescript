class Chicken {
  static kaki: number = 2;

  static jalan() {
    console.log(`ayam berjalan dengan ${this.kaki} kaki`);
  }

  getKaki() {
    // console.log(this.kaki); Property 'kaki' is a static member of type 'Chicken'
    console.log(Chicken.kaki);
  }
}

console.log(Chicken.jalan());

const ayam = new Chicken();
ayam.getKaki();

const ayam3 = new Chicken();
const ayam4 = new Chicken();
const ayam5 = new Chicken();
const ayam6 = new Chicken();
const ayam7 = new Chicken();
const ayam8 = new Chicken();

console.log(ayam3.getKaki());
console.log(ayam4.getKaki());
console.log(ayam5.getKaki());
console.log(ayam6.getKaki());
console.log(ayam7.getKaki());
console.log(ayam8.getKaki());

Chicken.kaki = 4;

console.log(ayam3.getKaki());
console.log(ayam4.getKaki());
console.log(ayam5.getKaki());
console.log(ayam6.getKaki());
console.log(ayam7.getKaki());
console.log(ayam8.getKaki());
