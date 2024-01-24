class Pokemon {
  constructor(name, emoji, health, attacks) {
    this.name = name;
    this.emoji = emoji;
    this.health = health;
    this.attacks = attacks;
  }

  randomAttack() {
    const randomIndex = Math.floor(Math.random() * this.attacks.length);
    const randomAttack = this.attacks[randomIndex];
    return randomAttack.attackName;
  }

  logAttack() {
    for (let i = 0; i < this.attacks.length; i++) {
      const attack = this.attacks[i];
      console.log(`${i}  : ${attack.attackName}`);
    }
  }

  logPokemon() {
    console.log(`Name : ${this.name}`);
    console.log(`Health : ${this.health} PV`);
    for (let i = 0; i < this.attacks.length; i++) {
      const attack = this.attacks[i];
      console.log(`Attack ${i} : ${attack.attackName}`);
    }
  }

  getHealth() {
    const maxHearts = 10;
    const hearts = Math.ceil((this.health / 100) * maxHearts);

    let healthString = "🟩".repeat(hearts) + "🟥".repeat(maxHearts - hearts);
    console.log(healthString);
  }
}

class Attack {
  constructor(attackName, power, stability) {
    this.attackName = attackName;
    this.power = power;
    this.stability = stability;
  }

  performAttack() {}

  logAttack() {}
}

const pikachu = new Pokemon("Pikachu", "⚡️", 50, [
  new Attack("Thunderbolt", 30, 0.2),
  new Attack("Electro Ball", 20, 0.4),
  new Attack("Quick Attack", 10, 0.8),
]);

pikachu.getHealth();
// console.log(pikachu.attacks);
// console.log(pikachu.attacks.length);
// console.log(pikachu.randomAttack());
