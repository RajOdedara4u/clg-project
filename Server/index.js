const express = require("express");
const app = express();
const env = require("dotenv");
const cors = require("cors");
const connectDB = require("./db");
const session = require("express-session");
const router = require("./routes/user");
const message = require("./routes/message");
const product = require("./routes/Products");

const User = require("./models/User");

env.config();
connectDB();
app.use(cors());

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "Hola hola hola hola",
  })
);

const getUsers = async () => {
  try {
    const users = await User.find(); // Fetch all users
    console.log(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

getUsers();

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});
app.use("/", router);
app.use("/", message);
app.use("/", product);

app.listen(process.env.PORT, () => {
  console.log(`Backend server is running on ${process.env.PORT}`);
});
