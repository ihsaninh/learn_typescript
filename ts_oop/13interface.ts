interface AndroidPhone {
  name: string;
  menu(): void;
  home(): void;
  back(): void;
}

class Xiaomi implements AndroidPhone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  menu(): void {
    console.log('menu tapped');
  }
  home(): void {
    console.log('home tapped');
  }
  back(): void {
    console.log('back tapped');
  }
  
}

class GameA {
  private phone: AndroidPhone;

  constructor(phone: AndroidPhone) {
    this.phone = phone;
  }

  back() {
    console.log('kembali ke menu utama di game');
  }

  menu() {
    this.phone.menu();
  }

  home() {
    this.phone.home();
  }
}

const xiaomi = new Xiaomi('Redmi Note 8');

const game = new GameA(xiaomi);
game.home();