class Fighter{
  constructor(name = "Default_Name_1", power = 5, health = 10){
    this.name = name;
    this.power = power;
    this.health = health;
  }

  setDamage(damage){
    this.health = this.health - damage;
    console.log(this.health);
  }



  hit(enemy, point){
    let damage = point*this.power;
    enemy.setDamage(damage)
  }
}

class ImprovedFighter extends Fighter{

  constructor(name = "Default_Name_2", power = 10, health = 20){
    super();
    this.name = name;
    this.power = power;
    this.health = health;
  }

  hit(enemy, point){
    super.hit(enemy, 2*point);
  }
}

function fight(fighter, improvedFighter, ...point){
  let arr = [fighter, improvedFighter];
  let count = 0;
  while ((fighter.health>0) && (improvedFighter.health>0)){
    console.log(`Fight ${count+1}`);
    console.log(`Attacking player: name - ${arr[count%2].name}, power - ${arr[count%2].power}, health - ${arr[count%2].health} `);
    console.log(`Second player: name - ${arr[(count+1)%2].name}, power - ${arr[(count+1)%2].power}, health - ${arr[(count+1)%2].health} `);
    arr[count%2].hit(arr[(count+1)%2], point[0]);
    count++;
  }
  console.log(`The winner is ${arr[(count-1)%2].name}!`);

}

let fighter1 = new Fighter("Vasya", 2, 20);
let fighter2 = new ImprovedFighter("Petya", 3, 20);

fight(fighter1, fighter2, 2, 3, 4);
