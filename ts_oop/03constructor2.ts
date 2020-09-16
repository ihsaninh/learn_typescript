// cara 1

class Animal4 {
  nama: string;
  kaki: number;

  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}

const bird = new Animal4('Kakaktua', 2);
console.log(bird)

// cara 2
class Animal41 {
  constructor(public nama: string, public kaki: number) {}
}

const bird2 = new Animal41('Kakaktua', 2);
console.log(bird2);