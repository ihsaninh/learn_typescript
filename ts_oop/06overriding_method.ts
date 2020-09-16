class Animal6 {
  nama: string = '';

  bernafas() {
    console.log('sedang bernafas');
  }
}

class Cat extends Animal6 {
  bernafas() {
    console.log('malas bernafas');
  }
}

const cat = new Cat();
cat.bernafas();