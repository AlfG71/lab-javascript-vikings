// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
constructor(name, health, strength){
    super(health, strength)
    this.name = name
}
receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
        return `${this.name} has received ${damage} points of damage`
    }
    return `${this.name} has died in act of combat`
}
battleCry(){
    return `Odin Owns You All!`
}
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health !== 0) {
      return `A Saxon has received ${damage} points of damage`;
    }

    return `A Saxon has died in combat`;
  }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let damage = this.vikingArmy[vikingIndex].attack();

        let message = this.saxonArmy[saxonIndex].receiveDamage(damage);

        if(message.includes("died")){
            this.saxonArmy.splice(saxonIndex,1)
        }
        return message
    }

    saxonAttack(){
      let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
      let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
      let damage = this.saxonArmy[saxonIndex].attack();

      let message = this.vikingArmy[vikingIndex].receiveDamage(damage);

      if (message.includes("died")) {
        this.vikingArmy.splice(vikingIndex, 1);
      }

      return message;

    }

    showStatus(){
      if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
      } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survived another day...";
      } else {
        return "Vikings and Saxons are still in the thick of battle.";
      }
    }
}

// let saxon = new Saxon(100, 100);
// let viking = new Viking('Morti', 200, 150);
// let war = new War();
// war.addSaxon(saxon);
// console.log(war);
// war.addViking(viking);
// console.log(war);
// console.log(war.showStatus());
