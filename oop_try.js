'use strict'

class Product {
  constructor(price) {
    this.price = price;
  }
  
  getPrice = function() {
    return this.price;
  }
}

class Box {
  constructor(product) {
    if (!this.product) {
      this.products = [];
    }
    this.products.push(product);
  }

  addProduct = function(product) {
    this.products.push(product);
  };

  calcBoxPrice = function(){
    var sumOfPrices = 0;
    for (i = 0; i < this.products.length; i++){
      sumOfPrices += this.products[i].getPrice()
    } 
    return sumOfPrices
  }
}

var kolbasa = new Product(30);
var moloko = new Product(90);
// console.log(kolbasa, moloko);
// console.log(moloko.getPrice());
var box = new Box(moloko);
box.addProduct(kolbasa);
console.log(box.calcBoxPrice());