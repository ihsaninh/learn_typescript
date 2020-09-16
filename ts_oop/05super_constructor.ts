class Animal5 {
  nama: string;
  kaki: number;

  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}

class Frog extends Animal5 {
  beracun: boolean;

  constructor(nama: string, kaki: number, beracun: boolean) {
    super(nama, kaki);
    this.beracun = beracun;
  }
}

const frog = new Frog('Bangkong', 4, false);
console.log(frog);