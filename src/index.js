import { choice, remove } from './helpers';
import { foods } from './foods';

let fruit = choice(foods);

console.log(`I'd like one random ${fruit}, please.`)

console.log(`Here you go: ${fruit}`)

console.log('Delicious! May I have another?')

let newFruits = remove(foods, fruit);

console.log(`I'm sorry, we're all out. We have ${newFruits.length} left.`)