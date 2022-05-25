const { Product } = require("./models");

Product.findAll().then((Product) => {
  console.log(Product);
});

Product.findOne({
  where: {
    id: 2,
  },
}).then((Product) => {
  console.log(Product);
});
