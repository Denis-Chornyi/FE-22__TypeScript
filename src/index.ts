type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

const orderQueue: Order[] = [];

const addNewPizza = (pizzaObj: Omit<Pizza, "id">): Pizza => {
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObj,
  };
  menu.push(newPizza);

  return newPizza;
};

const addToArray = <Type>(array: Type[], item: Type): Type[] => {
  array.push(item);

  return array;
};

addToArray<Pizza>(menu, {
  id: nextPizzaId++,
  name: "Chicken Bacon Ranch",
  price: 12,
});
addToArray<Order>(orderQueue, {
  id: nextPizzaId++,
  pizza: menu[2],
  status: "completed",
});

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

const placeOrder = (pizzaName: string): void | Order => {
  const selectedPizza = menu.find((pizza) => pizza.name === pizzaName);
  if (!selectedPizza) {
    return console.error(`${pizzaName} does not exist in the menu`);
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
};

const completeOrder = (orderId: number): void | Order => {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    return console.error(`${orderId} does not exist in the orderQueue`);
  }
  order.status = "completed";
  return order;
};

placeOrder("Chicken Bacon Ranch");

completeOrder(1);

const getPizzaDetail = (identifier: string | number): Pizza | undefined => {
  if (typeof identifier == "string" || typeof identifier === "number") {
    return menu.find(
      (pizza) => pizza.id === identifier || pizza.name === identifier
    );
  } else {
    throw new TypeError(
      'Parameter "identifier" must be either a string or a number'
    );
  }
};

console.log(getPizzaDetail(1));

console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("Order queue", orderQueue);

// /////////////////////////////////////////////////////////////////////////

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

// /////////////////////////////////////////////////////////////////////////

type UserRole = "guest" | "member" | "admin";

type User = {
  id: number;
  username: string;
  role: UserRole;
};

type UpdatedUser = Partial<User>;

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id: nextUserId++, username: "john_doe", role: "admin" },
  { id: nextUserId++, username: "guest_user", role: "guest" },
  { id: nextUserId++, username: "charlie_brown", role: "member" },
];

const updateUser = (id: number, updates: UpdatedUser) => {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    console.error("User not found!");
    return;
  }
  Object.assign(foundUser, updates);
};

updateUser(1, { username: "new_join_doe" });
updateUser(4, { role: "guest" });
console.log(users);

const fetchUserDetails = (username: string): User => {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User with username ${username} not found`);
  }
  return user;
};

console.log(fetchUserDetails("guest_user"));

const addNewUser = (newUser: Omit<User, "id">): User => {
  const user: User = {
    id: nextUserId++,
    ...newUser,
  };
  users.push(user);
  return user;
};

addNewUser({ username: "joe_schmoe", role: "member" });
console.log(users);

// /////////////////////////////////////////////////////////////////////////

const gameScores = [14, 21, 33, 42, 59];

const favoriteThings = [
  "raindrops on roses",
  "whiskers on kittens",
  "bright copper kettles",
  "warm woolen mittens",
];

const voters = [
  { name: "Alice", age: 42 },
  { name: "Bob", age: 77 },
];

const getLastItem = <Type>(array: Type[]): Type | undefined => {
  return array[array.length - 1];
};

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
