import products from "./data";

const features = [
  "Saleor Dash Shoes",
  "Saleor Card 50",
  "Saleor Grey Hoodie",
  "Saleor Mighty Mug",
  "Saleor Dimmed Sunnies Sunglasses",
  "Saleor Beanie",
  "Saleor Reversed T-shirt",
  "Saleor Neck Warmer",
  "Saleor Cushion",
];

async function fetchFeatureProducts() {
  try {
    return await new Promise((resolve) => {
      //faked data retrive delay
      const time = setTimeout(() => {
        const featureProducts = products.filter((product) => {
          return features.some((fearture) => {
            return product.name === fearture;
          });
        });

        resolve(featureProducts);
      }, 1000);
    });
  } catch (error) {
    throw error;
  }
}

export default fetchFeatureProducts;
