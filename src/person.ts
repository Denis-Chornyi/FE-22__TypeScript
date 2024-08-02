let myName: string = "Den";
const numberOfWheels: number = 4;
const isStudent: boolean = false;

type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

const person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
};

const person2: Person = {
  name: "Jill",
  age: 22,
  isStudent: false,
  address: {
    street: "007 Main",
    city: "Boston",
    country: "USA",
  },
};

let People: Array<Person> = [person1, person2];
