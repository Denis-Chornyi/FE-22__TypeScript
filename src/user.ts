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
