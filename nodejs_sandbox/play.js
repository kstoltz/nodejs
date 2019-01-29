const hero = {
  name: 'Peter Parker',
  heroName: 'Spider-Man',
  archEnemy: 'Doctor Octopus',
  action() {
    console.log('Thwip ' + this.archEnemy);
  }
}

const { heroName, archEnemy } = hero;

console.log(heroName, archEnemy);

const characters = ['Mary Jane','J. Jonah Jameson'];
characters.push('Harry Osborn');
const friends = [...characters];

const [friend1, friend2, friend3] = friends;

console.log (friend1, friend2, friend3);

// const toArray = (...args) => {
//   return args;
// }

//console.log(toArray('Green Goblin',92,true));

//console.log(characters.map(character => 'Character: ' + character));

//hero.action();