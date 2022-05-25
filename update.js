const { Product } = require("./models");

Product.update(
  {
    product_color: "Black and Red",
  },
  {
    where: {
      id: 2,
    },
  }
)
  .then(() => {
    console.log("Product has updated");
    process.exit();
  })
  .catch((err) => {
    console.log("Error while updating Product, try again");
  });
