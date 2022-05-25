import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("password123", 10),
    isAdmin: true,
  },
  {
    name: "John Boe",
    email: "john@example.com",
    password: bcrypt.hashSync("password123", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("password123", 10),
  },
];

export default users;

//hashsync should be changed to async, I think???