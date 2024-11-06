import products from "./data";

async function fetchProducts() {
  try {
    return await new Promise((resolve) => {
      //faked data retrive delay
      const time = setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  } catch (error) {
    throw error;
  }
}

export default fetchProducts;
