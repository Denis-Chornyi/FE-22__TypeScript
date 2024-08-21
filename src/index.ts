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

const placeOrder = (pizzaName: string): void => {
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
};

const completeOrder = (orderId: number): void => {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    return console.error(`${orderId} does not exist in the orderQueue`);
  }
  order.status = "completed";
};

placeOrder("Chicken Bacon Ranch");

completeOrder(1);

const getPizzaDetail = (identifier: string | number): Pizza | undefined => {
  if (typeof identifier !== "string" && typeof identifier !== "number") {
    throw new TypeError(
      'Parameter "identifier" must be either a string or a number'
    );
  } else {
    return menu.find(
      (pizza) => pizza.id === identifier || pizza.name === identifier
    );
  }
};

console.log(getPizzaDetail(1));

console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("Order queue", orderQueue);
