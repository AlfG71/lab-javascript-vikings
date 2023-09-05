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

      super(health, strength);
      this.name = name;

  }

  receiveDamage(damage){

      super.receiveDamage(damage);

      if(this.health > 0){
        return `${this.name} has received ${damage} points of damage`;
      } else {
        return `${this.name} has died in act of combat`;
      }

  }

  battleCry(){

      return `Odin Owns You All!`;

  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {

      super.receiveDamage(damage);

      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
      } else {
        return `A Saxon has died in combat`;
      }

  }
}

// War
class War {

    constructor(){

        this.vikingArmy = [];
        this.saxonArmy = [];

    }

    addViking(viking){

        this.vikingArmy.push(viking);

    }

    addSaxon(saxon){

        this.saxonArmy.push(saxon);

    }

    vikingAttack(){

        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let saxonArmy = this.saxonArmy;
        let attackingViking = this.vikingArmy[vikingIndex];
        let attackedSaxon = saxonArmy[saxonIndex];
        let vikingDamage = attackingViking.attack();
        let message = attackedSaxon.receiveDamage(vikingDamage);

        if(attackedSaxon.health <= 0){
            saxonArmy.splice(saxonIndex, 1);
        }

        return message;

    }

    saxonAttack(){

        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let attackingSaxon = this.saxonArmy[saxonIndex];
        let attackedVicking = this.vikingArmy[vikingIndex];
        let saxonDamage = attackingSaxon.attack();
        let message = attackedVicking.receiveDamage(saxonDamage);

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
// war.addViking(viking);
// console.log(war.vikingAttack());

