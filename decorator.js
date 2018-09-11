class PriceCat {
  getPrice(item) {
    return fetch(`price.goods.com/${item.name}`);
  }
}

class VatPriceCat {
  constructor(wrapped) {
    this.wrapped = wrapped;
  }

  getPrice(item) {
    let defaultPrice;

    return this.wrapped.getPrice(item)
      .then((price) => {
        defaultPrice = price;

        return fetch('vat.prices.com');
      })
      .then((vat) => {
        const tax = defaultPrice * vat;

        return defaultPrice + tax;
      });
  }
}

class Goods { }


let tomato = new Goods({ type: "tomato" });
let priceCat = new PriceCat();
let vatPriceCatalogue = new VatPriceCat(priceCat);
let itemPrice;

priceCat.getPrice(tomato)
  .then(price => itemPrice = price);

varPriceCat.getPrice(tomato)
  .then(price => itemPrice = price);


// my solution
class VatPriceCat {
  constructor(wrapped) {
    this.wrapped = wrapped;
  }

  getPrice(item) {
    return this.wrapped.getPrice(item)
      .then((price) => {
        this.defaultPrice = price;
        return fetch('vat.prices.com');
      })
      .then((vat) => {
        return this.defaultPrice + (this.defaultPrice * vat); // price + tax
      });
  }
}