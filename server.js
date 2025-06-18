const express = require("express");
const productRoutes = require("./product/product.route");
const userRoutes =  require("./user/user.route")
const { sequelize } = require("./models");
const path  = require("path")


const app = express();
app.use(express.json());
app.use("/uploads",express.static(path.join(__dirname,'uploads')))
app.use("/products", productRoutes);
app.use("/users",userRoutes)

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

sequelize
  .sync({ alter: false})
  .then(() => {
    console.log("Database synced!");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to sync DB ", error);
  });
