'use strict';

// State object keeps track of the application state (all available products and current state of the user's cart)
const state = {
  allProducts: [],
  cart: null,
};

// Cart constructor.
const Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

const CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

  // addItem is a method
  // product is an object
Cart.prototype.addItem = function(product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  // make a new item with out keyword "new" in our constructor function
  // an object from the constructor will be passed in
  // the data type of quantity is a number
  const newItem = CartItem(product, quantity)
  this.items.push(newItem)
  console.log(this.items)
    // let newCart = new Cart([]) / newCart.addItem() / let bag = state.allProducts[0] / bag / newCart.addItem(bag, 1) /
};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  // a string is the only data type localStorage can store
  let cartSTring = JSON.stringify(state.cart)
  localStorage.setItem("cart", cartString) // to get the items I want to save, I must pass in cart as a string and then stringify the cart itself
  console.log(localStorage) // these tests are more involved
    // testing a method on the cart object
    // let cart = new Cart([]) pass in empty array
    // push item into cart let cartItem = new CartItem(state.allProducts[0], 1)
    // cartItem
    // cart.saveToLocalStorage
    // refresh page
    // localStorage
};

// prototype 
Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  this.items = this.items.filter(function(currentItem){ //this is a self reference the items in the cart
    if(currentItem.product.name == productName){
      return false 
    } else {
      return true
    }
  }) 
  console.log(this.itmes) //
  // call methods on cart object ; create new cart
  // let cart = new Cart([])
  // cart.addItem(state.allProducts[0], 1)
  // cart.addItem(state.allProducts[1], 1)
  // cart.removeItem("Banana")
};

Cart.prototype.updateCounter = function() {
  // TODO: Update the cart count in the header nav with the number of items in the Cart
}

// Product contructor.
const Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
};

function generateCatalog() {
  let bag = new Product('assets/bag.jpg', 'Bag');
  let banana = new Product('assets/banana.jpg', 'Banana');
  let bathroom = new Product('assets/bathroom.jpg', 'Bathroom');
  let boots = new Product('assets/boots.jpg', 'Boots');
  let breakfast = new Product('assets/breakfast.jpg', 'Breakfast');
  let bubblegum = new Product('assets/bubblegum.jpg', 'Bubblegum');
  let chair = new Product('assets/chair.jpg', 'Chair');
  let cthulu = new Product('assets/cthulhu.jpg', 'Cthulhu');
  let dogDuck = new Product('assets/dog-duck.jpg', 'Dog-Duck');
  let dragon = new Product('assets/dragon.jpg', 'Dragon');
  let pen = new Product('assets/pen.jpg', 'Pen');
  let petSweep = new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  let scissors = new Product('assets/scissors.jpg', 'Scissors');
  let shark = new Product('assets/shark.jpg', 'Shark');
  let sweep = new Product('assets/sweep.png', 'Sweep');
  let tauntaun = new Product('assets/tauntaun.jpg', 'Taun-Taun');
  let unicorn = new Product('assets/unicorn.jpg', 'Unicorn');
  let waterCan = new Product('assets/water-can.jpg', 'Water Can');
  let wineGlass = new Product('assets/wine-glass.jpg', 'Wine Glass');
  state.allProducts.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
