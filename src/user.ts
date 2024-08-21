type UserRole = "guest" | "member" | "admin";

type User = {
  id: number;
  userName: string;
  role: UserRole;
};

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, userName: "john_doe", role: "member" },
  { id: nextUserId++, userName: "john_doe", role: "admin" },
  { id: nextUserId++, userName: "guest_user", role: "guest" },
  { id: nextUserId++, userName: "charlie_brown", role: "member" },
];

const updateUser = (id: number, updates: Partial<User>): void => {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    throw new Error("User not found!");
  }
  Object.assign(foundUser, updates);
};

updateUser(1, { userName: "new_join_doe" });
updateUser(4, { role: "guest" });
console.log(users);

const fetchUserDetails = (userName: string): User | void => {
  const user = users.find((user) => user.userName === userName);
  if (!user) {
    throw new Error(`User with username ${userName} not found`);
  }
  return user;
};

console.log(fetchUserDetails("guest_user"));

const addNewUser = (newUser: Omit<User, "id">): void => {
  const user: User = {
    id: nextUserId++,
    ...newUser,
  };
  users.push(user);
};

addNewUser({ userName: "joe_schmoe", role: "member" });
console.log(users);
