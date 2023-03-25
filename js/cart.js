/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  // const cartItems = JSON.parse(localStorage.getItem('cart')) || []; // multiply operations in one line // 
  var cartItems = undefined;
  let cartString = localStorage.getItem("cart")
  let cartObject = JSON.parse(cartString)
  if(cartObject == undefined){
    cartItems = []
  }else{
    cartItems = cartObject.items
  }
  state.cart = new Cart(cartItems);
  // console.log("state.cart", state.cart)
    // var = new Cart ([])
    // cart.addItem(state.allProducts[0], 1)
    // cart.addItem(state.allProducts[1], 1)
    // local.Storage
    // local.Storage.clear
    // loadCart()
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tableRows = document.querySelectorAll('tbody tr');
  for(let i = 0; i < tableRows.length; i++){
    tableRows[i].remove();
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tableBody = document.getElementById("cart")
  let items = state.cart.items;
  // TODO: Iterate over the items in the cart
  for (let i = 0; i < items.length; i++){

  
  // TODO: Create a TR
  let tableRow = document.createElement("tr")
  // TODO: Create a TD for the delete link, quantity,  and the item
  let tableDeletedLink = document.createElement("td");
  tableDeletedLink.innerHTML = "X";

  let tableQuantity = document.createElement("td");
  tableQuantity.innerHTML = items[i].tableQuantity;

  let tableItem = document.createElement("td");
  tableItem.innerHTML = items[i].product.name;
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  tableRow.append(tableDeletedLink, quantity, item);
  tableBody.append(tableRow);
  }
}


function removeItemFromCart(event) {
  if(event.target.innerHTML == "X"){
    let clickedRow = event.target.parentElement;
    let deletedItemName = clickedRow.children[2].innerText;

    for (let i = 0; i < state.cart.items.length; i++){
      let item = state.cart.items[i].products;
      if (item.name === deletedItemName){
        state.cart.removeItem(item);
      }
    }
  }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
