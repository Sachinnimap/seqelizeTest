const { Product, User } = require("../../models");

async function getAllProducts() {
  return await Product.findAll({
    // include: [
    //   {
    //     model: User,
    //     as: "user",
    //   },
    // ],
  });
}

async function getProductById(productId) {
  return await Product.findOne({ where: { id: productId } });
}

async function addProduct(data) {
  const {
    name,
    type,
    desc,
    price,
    outOfStock,
    country,
    manufacturedBy,
    image,
    mobileNumber,
    userId,
    isAvailable,
  } = data;
  await Product.create({
    name,
    type,
    desc,
    price,
    outOfStock,
    country,
    manufacturedBy,
    image,
    mobileNumber,
    userId,
    isAvailable,
  });
  return null;
}

async function modifyProduct(productId, data) {
  const [response] = await Product.update(data, {
    where: {
      id: productId,
    },
  });

  if (response == 0) throw new Error("product not updated!");

  return null;
}

async function deleteProduct(productId) {
  await Product.destroy({ where: { id: productId } });
  return null;
}

module.exports = {
  getAllProducts,
  getProductById,
  modifyProduct,
  deleteProduct,
  addProduct,
};
