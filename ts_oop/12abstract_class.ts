abstract class MyHewan {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makan(): void {
    console.log(`${this.name} sedang makan`);
  }

  abstract bergerak(): void;
}

class Kucing extends MyHewan {
  constructor() {
    super('kucing');
  }

  bergerak(): void {
    console.log('kucing berjalan');
  }
}

class Burung2 extends MyHewan {
  constructor() {
    super('burung');
  }

  bergerak(): void {
    console.log('burung terbang');
  }
}

const kucing = new Kucing();
kucing.bergerak();

const burung = new Burung2();
burung.bergerak();