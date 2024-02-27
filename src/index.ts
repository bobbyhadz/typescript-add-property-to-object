export {};

// EXAMPLE 1 - Add a property to an Object in TypeScript

interface Person {
  name: string;
  age?: number; // 👈️ mark as optional so you can add it later
}
const obj: Person = {
  name: 'Bobby Hadz',
};

obj.age = 30;

// ---------------------------------------------------

// // EXAMPLE 2 - Add any property to an object in TypeScript

// const obj: Record<string, any> = {};

// // 👇️ can now add any property to the object
// obj.name = 'Bobby Hadz';
// obj.age = 30;

// // 👇️ { name: 'Bobby Hadz', age: 30 }
// console.log(obj);

// ---------------------------------------------------

// // EXAMPLE 3 - Add any property but type key-value pairs you know in advance

// interface Animal extends Record<string, any> {
//   name: string;
//   age: number;
// }

// const obj: Animal = { name: 'Alfred', age: 3 };

// // 👇️ Can now add any property, but name and age are typed
// obj.type = 'Dog';

// ---------------------------------------------------

// // EXAMPLE 4 - Dynamically add Properties to an Object in TypeScript

// interface Person {
//   [key: string]: any;
// }

// const obj: Person = {};

// obj.name = 'Bobby Hadz';
// obj.age = 30;

// ---------------------------------------------------

// // EXAMPLE 5 - Explicitly typing specific properties

// interface Person {
//   [key: string]: any;
//   age: number;
//   name: string;
//   country?: string;
// }

// const obj: Person = {
//   name: 'Bobby Hadz',
//   age: 30,
// };

// obj.country = 'Chile';

// obj.language = 'TypeScript';

// ---------------------------------------------------

// // EXAMPLE 6 - Using a union to dynamically add properties to an object

// interface Person {
//   // 👇️ key         value
//   [key: string]: string | number;
// }

// const obj: Person = {
//   name: 'Bobby Hadz',
// };

// obj.age = 30;

// obj.country = 'Chile';

// ---------------------------------------------------

// // EXAMPLE 7 - Dynamically adding properties to an object with the `Record` type

// const obj: Record<string, any> = {
//   name: 'Bobby Hadz',
// };

// obj.age = 30;

// obj.country = 'Chile';

// ---------------------------------------------------

// // EXAMPLE 8 - Set an Object's property name from a Variable in TypeScript

// type Person = {
//   name: string;
//   country: string;
// };

// const myVar = 'name';

// const obj: Person = {
//   [myVar]: 'Bobby Hadz',
//   country: 'Chile',
// };

// // 👇️ { name: 'Bobby Hadz', country: 'Chile' }
// console.log(obj);

// ---------------------------------------------------

// // EXAMPLE 9 - Constructing the object's property name from multiple variables

// const myVar = 'na';
// const myVar2 = 'me';

// // 👇️ const obj: { [x: string]: string; country: string;}
// const obj = {
//   [myVar + myVar2]: 'Bobby Hadz',
//   country: 'Chile',
// };

// // 👇 {name: 'Bobby Hadz', country: 'Chile'}
// console.log(obj);

// ---------------------------------------------------

// // EXAMPLE 10 - Using Object.assign() in TypeScript

// const obj1 = { name: 'Bobby Hadz' };
// const obj2 = { country: 'Chile' };

// // 👇️ const result: { name: string; } & { country: string; }
// const result = Object.assign({}, obj1, obj2);

// // 👇️ { name: 'Bobby Hadz', country: 'Chile' }
// console.log(result);

// ---------------------------------------------------

// // EXAMPLE 11 - Caveats around using an existing object as the `target`

// const obj1 = { name: 'Bobby Hadz' };
// const obj2 = { country: 'Chile' };

// // 👇️ const result: { name: string; } & { country: string; }
// const result = Object.assign(obj1, obj2);

// // 👇️ {name: 'Bobby Hadz', country: 'Chile'}
// console.log(result);

// // 👇️ {name: 'Bobby Hadz', country: 'Chile'}
// console.log(obj1);

// ---------------------------------------------------

// // EXAMPLE 12 - Using spread syntax

// const obj1 = { name: 'Bobby Hadz' };
// const obj2 = { country: 'Chile' };

// // 👇️ const result: {country: string;name: string;}
// const result = { ...obj1, ...obj2 };

// // 👇️ { name: 'Bobby Hadz', country: 'Chile' }
// console.log(result);
