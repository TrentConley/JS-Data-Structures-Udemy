'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
// for of loop in js in a for each loop in python

const obj = { a: 0, b: [2, 3, 4], c: 'hello', d: 'a' };
const { c: first, ...others } = obj;
const { a: first1, b } = obj;
console.log('this is others ', others);
console.log(first1, b);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
  return sum;
};
console.log(menu.entries);

for (const [index, item] of menu.entries()) {
  console.log(`${index + 1}: ${item}`);
}

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open;
  console.log(open);
  console.log(restaurant.openingHours[day]);
}
*/

///////////////////soccer game //////////////////////
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const arr = [];
const target = 34;
for (let i = 0; i < 100; i++) arr.push(Math.floor(Math.random() * 100));
console.log(arr);

/*
//1
for (const [number, player] of game.scored.entries())
  console.log(`Goal ${number + 1}: ${player}`);

//2
let sum = 0;
for (const value of Object.values(game.odds)) sum += value;
const average = sum / Object.entries(game.odds).length;
console.log(average);

//3
for (const [name, value] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${
      game[name] == undefined ? 'draw' : 'victory ' + game[name]
    }: ${value}`
  );
}

//4
const scorers = {};
for (const name of game.scored) {
  // add the name in the scorers with a value of 1 if not in
  //if in, increase number by one
  // if (scorers[name]) scorers[name] += 1;
  // else scorers[name] = 1;

  scorers[name] ? (scorers[name] += 1) : (scorers[name] = 1);
}
console.log(scorers);
// const players1 = game.players[0];
// const players2 = game.players[1];
// const [gk1, ...fieldPlayers1] = [...players1];
// const [gk2, ...fieldPlayers2] = [...players2];

// const [...allPlayers] = [...players1, ...players2];
// // console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;
// // console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   for (let i = 0; i < players.length; i++) console.log(`${players[i]} scored.`);
//   console.log(`${players.length} goals scored in total!`);
// };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// // if true, then team 1 has better change to win.
// const team1win = game.odds.team1 < game.odds.team2;
// (team1win || console.log('team 2 wins!')) && console.log('team 1 wins!');
*/
