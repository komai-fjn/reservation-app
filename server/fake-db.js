const Product = require('./model/product')

class FakeDB{
  constructor(){
    this.products = [
      {
        name: "Phone XL",
        price: 799,
        description: "A large phone with one of the best screens",
        heading1: "aaaaaaaaaaaa",
        heading2: "bbbbbbbbbbb",
        heading3: "cccccc",
        headingtext1: "aaaaaaaaaa",
        headingtext2: "cccccccccccccc",
        headingtext3: "bbbbbbbbbbbbbb",
        coverImage: "./assets/img/phone-cover.jpg",
      },
      {
        name: "Phone Mini",
        price: 699,
        description: "A great phone with one of the best cameras",
        heading1: "aaaaaaaaaaaa",
        heading2: "bbbbbbbbbbb",
        heading3: "cccccc",
        headingtext1: "aaaaaaaaaa",
        headingtext2: "cccccccccccccc",
        headingtext3: "bbbbbbbbbbbbbb",
        coverImage: "./assets/img/phone-cover.jpg",
      },
      {
        name: "Phone Standard",
        price: 299,
        description: "",
        heading1: "aaaaaaaaaaaa",
        heading2: "bbbbbbbbbbb",
        heading3: "cccccc",
        headingtext1: "aaaaaaaaaa",
        headingtext2: "cccccccccccccc",
        headingtext3: "bbbbbbbbbbbbbb",
        coverImage: "./assets/img/phone-cover.jpg",
      },
      {
        name: "Phone XL",
        price: 799,
        description: "A large phone with one of the best screens",
        heading1: "aaaaaaaaaaaaddddddddddddd",
        heading2: "bbbbbbbbbbb",
        heading3: "cccccc",
        headingtext1: "aaaaaaaaaa",
        headingtext2: "cccccccccccccc",
        headingtext3: "bbbbbbbbbbbbbb",
        coverImage: "./assets/img/phone-cover.jpg",
      },
      {
        name: "Phone Mini",
        price: 699,
        description: "A great phone with one of the best cameras",
        heading1: "aaaaaaaaaaaacccccccccccccccc",
        heading2: "bbbbbbbbbbb",
        heading3: "cccccc",
        headingtext1: "aaaaaaaaaa",
        headingtext2: "cccccccccccccc",
        headingtext3: "bbbbbbbbbbbbbb",
        coverImage: "./assets/img/phone-cover.jpg",
      },
      {
        name: "Phone Standard",
        price: 299,
        description: "",
        heading1: "aaaaaaaaaaaabbbbbbbbbbbbbbb",
        heading2: "bbbbbbbbbbb",
        heading3: "cccccc",
        headingtext1: "aaaaaaaaaa",
        headingtext2: "cccccccccccccc",
        headingtext3: "bbbbbbbbbbbbbb",
        coverImage: "./assets/img/phone-cover.jpg",
      },
      {
        name: "Phone XL",
        price: 799,
        description: "A large phone with one of the best screens",
        heading1: "aaaaaaaaaaaaeeeeeeeeeeeeeee",
        heading2: "bbbbbbbbbbb",
        heading3: "cccccc",
        headingtext1: "aaaaaaaaaa",
        headingtext2: "cccccccccccccc",
        headingtext3: "bbbbbbbbbbbbbb",
        coverImage: "./assets/img/phone-cover.jpg",
      },
      {
        name: "Phone Mini",
        price: 699,
        description: "A great phone with one of the best cameras",
        heading1: "aaaaaaaaaaaasssssssssssssssssss",
        heading2: "bbbbbbbbbbb",
        heading3: "cccccc",
        headingtext1: "aaaaaaaaaa",
        headingtext2: "cccccccccccccc",
        headingtext3: "bbbbbbbbbbbbbb",
        coverImage: "./assets/img/phone-cover.jpg",
      },
      {
        name: "Phone Standard",
        price: 299,
        description: "",
        heading1: "aaaaaaaaaaaacccxxxxxxxxxxxxxxxx",
        heading2: "bbbbbbbbbbb",
        heading3: "cccccc",
        headingtext1: "aaaaaaaaaa",
        headingtext2: "cccccccccccccc",
        headingtext3: "bbbbbbbbbbbbbb",
        coverImage: "./assets/img/phone-cover.jpg",
      },
    ];
  }

  async init(){
    await this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb(){
    await Product.deleteMany({})
  }

    pushProductsToDb(){
      this.products.forEach(
        (product) => {
          const newProduct = new Product(product)
          newProduct.save()
        }
      );
    }

    seeDb(){
      this.pushProductsToDb()
    }
  }


module.exports = FakeDB
