class Animal7 {
  public nama: string;
  private kaki: number;
  protected mamalia: boolean;

  constructor(nama: string, kaki: number, mamalia: boolean) {
    this.nama = nama;
    this.kaki = kaki;
    this.mamalia = mamalia;
  }

  berjalan() {
    console.log('gw jalan');
  }
}

class Frog7 extends Animal7 {
  private umurTelur: number = 4;
  private umurKecebong: number = 7;
  private umurKatak: number = 90;

  getUmur() {
    console.log(this.umurTelur + this.umurKecebong + this.umurKatak);
    // this.kaki; //Property 'kaki' is private and only accessible within class 'Animal7'
  }
}

const frog = new Frog7('Budi', 4, false);
// frog.mamalia = true; Property 'mamalia' is protected and only accessible within class 'Animal7' and its subclasses.
// frog.umurKatak = 45; Property 'umurKatak' is private and only accessible within class 'Frog7'
console.log(frog);