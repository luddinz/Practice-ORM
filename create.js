const { Product } = require("./models");

Product.create({
  product_name: "Jacket",
  product_color: "Black",
  product_price: "200000",
  product_description: "Jacket for riding",
  approved: true,
}).then((Product) => {
  console.log(Product);
});
