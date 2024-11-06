import products from "./data";

async function fetchSearchProducts(searchQuery) {
  try {
    return await new Promise((resolve) => {
      //faked data retrive delay
      const time = setTimeout(() => {
        const searchProducts = products.filter((product) => {
          return product.name.toLowerCase().includes(searchQuery);
        });
        resolve(searchProducts);
      }, 1000);
    });
  } catch (error) {
    throw error;
  }
}

export default fetchSearchProducts;
