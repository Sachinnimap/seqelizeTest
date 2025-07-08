const express = require("express");
const productRoutes = require("./src/product/product.route");
const userRoutes = require("./src/user/user.route");
const bookRoutes = require("./src/book/book.route")
const itemRoutes =  require("./src/item/item.route")
const { sequelize } = require("./models");
const path = require("path");
const cors = require("cors");
const attachUser  = require("./middleware/attachUser");
// const { connectDB } = require("./config/mdatabase");
const {connectDB} = require("./config/mondatabase");
const { login } = require("./src/auth/auth.controller");
const session =  require("express-session")

const app = express();
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(attachUser) //attach user in request
app.use(session({
  secret : "SECRETKEY",
  resave :false,
  saveUninitialized : true,
  cookie :{secure : true}
}))

// app.use(cors()); //this will allowed all origins calls like ,  from any  domain - 3000,3002,3006,3008,3009...
// app.use(cors({ origin: "localhost:3000" }));
// app.use(
//   cors({
//     origin: "http://localhost:3000", //if we have multiple then need to call function
//     allowedHeaders: ["Authorization", "Content-Type"],
//     methods: ["POST", "GET", "PUT", "DELETE"], //only these request are allowed like PATCH request will not work!
//   })
// );

// app.use(
//   cors({
//     origin: "http//:localhost:3000",
//     methods: ["GET", "POST", "PUT"],
//     allowedHeaders: ["Autherization", "Content-Type"], //authorization:"Barear adlkjalf",Content-Type:"Application/json"
//   })
// );

// app.use((req, res, next) => {
//   console.log("Middleware called!");
//   next();
// });

app.post("/login",login)
app.use("/products", productRoutes);
// app.use("/users", userRoutes);
app.use("/books",bookRoutes)
app.use("/items",itemRoutes)

app.use((err, req, res, next) => {
  //   console.log("err", err);
  //   console.log("req", req);
  //   console.log("res", res);
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || "Interval server error",
  });
});

const PORT = 5000;

// // sequelize
// //   .sync({ alter: true })
// //   .
//   connectDB().then(() => {
//     // console.log("Database synced!");
//     app.listen(PORT, () => {
//       console.log(`server is running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Failed to sync DB ", error);
//   });



sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced!");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to sync DB ", error);
  });
