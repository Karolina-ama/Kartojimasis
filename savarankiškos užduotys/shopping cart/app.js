// You’ll create a class called ShoppingCart to manage items in a cart.

// Requirements:
//    1   Class Setup:

// *Create a class ShoppingCart.
// *Each cart tracks the items added in an array items.
// *Use a static property totalCarts to track how many carts have been created.
//    2   Methods:

// *addItem(name, price): Adds an item to the cart as an object {name, price}.
// *removeItem(name): Removes the item by name from the cart.
// *getTotal(): Calculates and logs the total price of items in the cart.
// *Static Method: logTotalCarts(): Logs the total number of carts created.

// Enhancements to Learn:
// Array.filter(): To remove an item from the items array.
// Default Parameter Values: Simplify method usage with optional parameters.
// Encapsulation with Private Fields:
// Use private properties (e.g., #items) to make them accessible only within the class.

class ShoppingCart {
  #items = [];

  //   Private Property Syntax:
  // In JavaScript, private properties (like #items) must be declared inside the class but outside the constructor.
  // Constructor Usage:

  // In the constructor, you initialize values like regular properties, but private fields should already be defined above the constructor.

  static totalCarts = 0;

  constructor() {
    ShoppingCart.totalCarts += 1;
  }

  addItem(name, price) {
    this.#items.push({ name, price });
    console.log(`added ${name} for $${price.toFixed(2)} to the cart`);
  }

  removeItem(name) {
    this.#items = this.#items.filter((item) => item.name !== name);
    console.log(`${name} has been removed from the cart.`);
  }



  getTotal () {
    const total = this.#items.reduce((sum, item) => sum + item.price, 0);
    console.log(`Total price: $${total.toFixed(2)}`);
  }

  static logTotalCarts() {
    console.log(`Total carts created: ${ShoppingCart.totalCarts}`);
  }

  sortItems(by) {
    if (by ==="name") {
        this.#items.sort((a,b) => a.name.localeCompare(b.name));        
    } else if (by === "price" ) {
        this.#items.sort((a,b) => a.price - b.price);
    }
    else {
        console.log("Invalid sort criteria.Use 'name' or 'price'.");
    }
    console.log(`Items sorted by ${by}:`, this.#items);
  }

  filterItemsByPrice(minPrice) {
    const filteredItems = this.#items.filter(item => item.price >= minPrice);
    console.log(`items costing at least $${minPrice}:`, filteredItems)
  }

  listItems() {
    const itemList = this.#items.map(item => `${item.name} - $${item.price.toFixed(2)}`);
    console.log("Items in cart:\n" + itemList.join("\n"));
    return itemList;
  }




}

const cart1 = new ShoppingCart();
cart1.addItem("Apple", 2.5);
cart1.addItem("Banana", 1.2);
cart1.addItem("Cherry", 3.0);

cart1.filterItemsByPrice(2); // Logs items costing at least $2
cart1.listItems();

