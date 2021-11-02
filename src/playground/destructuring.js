console.log('Hello');

const person = {
  name: 'Dev',
  age: 24,
  location: {
    city: 'Delhi',
    temp: 32,
  },
};

const {
  name,
  age,
  location: { city, temp },
} = person;
console.log(name, age, city, temp);
