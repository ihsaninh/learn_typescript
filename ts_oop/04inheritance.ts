class NewAnimal {
  nama: string = '';
  kaki: number = 0;

  bernafas() {
    console.log('burungnya bernafas');
  }
}

class Bird extends NewAnimal {
  warna: string = '';
}

const bird = new Bird();
bird.nama = 'Rajawali';
bird.kaki = 2;
bird.warna = 'abu-abu';
console.log(bird);

bird.bernafas();
console.log(bird);