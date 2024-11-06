import products from "./data";

async function fetchCategoryProducts(paramCategory) {
  try {
    return await new Promise((resolve) => {
      //faked data retrive delay
      const time = setTimeout(() => {
        const categoryProducts = products.filter((product) => {
          return product.categories
            .map((category) => {
              return category.toLowerCase();
            })
            .includes(paramCategory.toLowerCase());
        });

        resolve(categoryProducts);
      }, 1000);
    });
  } catch (error) {
    throw error;
  }
}

export default fetchCategoryProducts;
