const items = require('./data/items');
const tags = require('./data/tags');
const brands = require('./data/brands');
const itemTypes = require('./data/itemTypes');
const films = require('./data/films.json');
const cartData = require('./data/cartData.json');

module.exports = {
  items,
  tags,
  brands,
  itemTypes,
  films,
  cartData,
};

// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
