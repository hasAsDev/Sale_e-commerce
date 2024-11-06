const products = [
  {
    id: 1,
    name: "Saleor Monospace T-Shirt",
    description:
      "Your t-shirt is your second skin. It’s the version of you that you show to the world. Wear the Monospace one that flows with your command line kung-fu moves! ",
    image: "Saleor_Monospace_T-Shirt",
    categories: ["T-shirts", "Apparel"],
    stocks: [
      {
        variant: "S",
        price: 20.0,
        quatity: 10,
      },
      {
        variant: "M",
        price: 20.0,
        quatity: 10,
      },
      {
        variant: "L",
        price: 20.0,
        quatity: 10,
      },
      {
        variant: "XL",
        price: 20.0,
        quatity: 10,
      },
      {
        variant: "XXL",
        price: 20.0,
        quatity: 10,
      },
    ],
    range: "$20.00",
  },
  {
    id: 2,
    name: "Saleor Balance 420 Shoes",
    description:
      "Step into summer with the right balance. Every time your head goes down, you see these beauties, and your mood bounces right back up.",
    image: "Saleor_Balance_420_Shoes",
    categories: ["Shoes"],
    stocks: [
      {
        variant: "39",
        price: 50.0,
        quatity: 9,
      },
      {
        variant: "40",
        price: 50.0,
        quatity: 9,
      },
      {
        variant: "41",
        price: 50.0,
        quatity: 9,
      },
      {
        variant: "42",
        price: 50.0,
        quatity: 9,
      },
      {
        variant: "45",
        price: 50.0,
        quatity: 9,
      },
      {
        variant: "",
        price: 50.0,
        quatity: 9,
      },
    ],
    range: "$50.00",
  },
  {
    id: 3,
    name: "Saleor Book about Commerce",
    description: "Scale effortlessly",
    image: "Saleor_Book_about_Commerce",
    categories: ["Audiobooks", "Accessories"],
    stocks: [
      {
        variant: "DVD",
        price: 6.0,
        quatity: 9,
      },
      {
        variant: "iTunes",
        price: 6.0,
        quatity: 9,
      },
      {
        variant: "MP3",
        price: 6.0,
        quatity: 9,
      },
    ],
    range: "$6.00",
  },
  {
    id: 4,
    name: "Saleor Blue Hoodie",
    description: "Saleor Blue Hoodie",
    image: "Saleor_Blue_Hoodie",
    categories: ["Sweatshirts", "Apparel"],
    stocks: [
      {
        variant: "",
        price: 35.0,
        quatity: 7,
      },
    ],
    range: "$35.00",
  },
  {
    id: 5,
    name: "Saleor Blue Plimsolls Shoes",
    description:
      "Step into summer with Saleor. Every time your head goes down, you see these beauties, and your mood bounces right back up",
    image: "Saleor_Blue_Plimsolls_Shoes",
    categories: ["Shoes"],
    stocks: [
      {
        variant: "40",
        price: 75.0,
        quatity: 11,
      },
      {
        variant: "41",
        price: 75.0,
        quatity: 11,
      },
      {
        variant: "42",
        price: 75.0,
        quatity: 11,
      },
    ],
    range: "$75.00",
  },
  {
    id: 6,
    name: "Saleor Blue Polygon T-Shirt",
    description:
      "Ever have those days where you feel a bit geometric? Can't quite shape yourself up right? Show your different sides with a Saleor styles.",
    image: "Saleor_Blue_Polygon_T-Shirt",
    categories: ["T-shirts", "Apparel"],
    stocks: [
      {
        variant: "M",
        price: 45.0,
        quatity: 43,
      },
      {
        variant: "L",
        price: 45.0,
        quatity: 43,
      },
      {
        variant: "XL",
        price: 45.0,
        quatity: 43,
      },
    ],
    range: "$45.00",
  },
  {
    id: 7,
    name: "Saleor White T-Shirt",
    description:
      "There is life in outer space. This vibrant light speed cubes brings life to any surface. Goes on easy and dries at light speed.",
    image: "Saleor_White_T-Shirt",
    categories: ["T-shirts", "Apparel"],
    stocks: [
      {
        variant: "S",
        price: 30.0,
        quatity: 11,
      },
      {
        variant: "M",
        price: 30.0,
        quatity: 11,
      },
      {
        variant: "L",
        price: 30.0,
        quatity: 11,
      },
      {
        variant: "XL",
        price: 30.0,
        quatity: 11,
      },
      {
        variant: "XXL",
        price: 30.0,
        quatity: 11,
      },
    ],
    range: "$30.00",
  },
  {
    id: 8,
    name: "Saleor Dark Polo Shirt",
    description:
      "Ever have those days where you feel a bit geometric? Can't quite shape yourself up right? Show your different sides with a Saleor styles.",
    image: "Saleor_Dark_Polo_Shirt",
    categories: ["Polo shirts", "Apparel"],
    stocks: [
      {
        variant: "X",
        price: 45.0,
        quatity: 11,
      },
      {
        variant: "M",
        price: 45.0,
        quatity: 11,
      },
      {
        variant: "XXL",
        price: 45.0,
        quatity: 11,
      },
    ],
    range: "$45.00",
  },
  {
    id: 9,
    name: "Saleor Dark T-Shirts",
    description:
      "Ever have those days where you feel a bit geometric? Can't quite shape yourself up right? Show your different sides with a Saleor styles.",
    image: "Saleor_Dark_T-Shirts",
    categories: ["T-shirts", "Apparel"],
    stocks: [
      {
        variant: "S",
        price: 45.0,
        quatity: 22,
      },
      {
        variant: "M",
        price: 45.0,
        quatity: 22,
      },
      {
        variant: "L",
        price: 45.0,
        quatity: 22,
      },
    ],
    range: "$45.00",
  },
  {
    id: 10,
    name: "Saleor Dash Shoes",
    description:
      "Step into summer with the right balance. Every time your head goes down, you see these beauties, and your mood bounces right back up.",
    image: "Saleor_Dash_Shoes",
    categories: ["Shoes"],
    stocks: [
      {
        variant: "39",
        price: 90.0,
        quatity: 12,
      },
      {
        variant: "40",
        price: 90.0,
        quatity: 12,
      },
      {
        variant: "41",
        price: 90.0,
        quatity: 22,
      },
      {
        variant: "42",
        price: 54.0,
        quatity: 41,
      },
      {
        variant: "43",
        price: 81.0,
        quatity: 22,
      },
    ],
    range: "$54.00 - $90.00",
  },
  {
    id: 11,
    name: "Saleor White Sunglasses",
    description: "Saleor White Sunglasses",
    image: "Saleor_White_Sunglasses",
    categories: ["Sunglasses", "Apparel"],
    stocks: [
      {
        variant: "",
        price: 15.0,
        quatity: 33,
      },
    ],
    range: "$15.00",
  },
  {
    id: 12,
    name: "Saleor Book about Enterprise Commerce",
    description: "Open Source without the DevOps",
    image: "Saleor_Book_about_Enterprise_Commerce",
    categories: ["Audiobooks", "Accessories"],
    stocks: [
      {
        variant: "Vinyl",
        price: 8.99,
        quatity: 32,
      },
      {
        variant: "DVD",
        price: 8.99,
        quatity: 32,
      },
      {
        variant: "iTunes",
        price: 8.99,
        quatity: 32,
      },
      {
        variant: "CD",
        price: 8.99,
        quatity: 32,
      },
    ],
    range: "$8.99",
  },
  {
    id: 13,
    name: "Saleor Card 100",
    description: "Gift card to use in the shop.",
    image: "Saleor_Card_100",
    categories: ["Gift cards", "Accessories"],
    stocks: [
      {
        variant: "",
        price: 100.0,
        quatity: 11,
      },
    ],
    range: "$100.00",
  },
  {
    id: 14,
    name: "Saleor Card 50",
    description:
      'To redeem your gift card, just enter your code "IDDQD" on ACME.',
    image: "Saleor_Card_50",
    categories: ["Gift cards", "Accessories"],
    stocks: [
      {
        variant: "",
        price: 50.0,
        quatity: 10,
      },
    ],
    range: "$50.00",
  },
  {
    id: 15,
    name: "Saleor Card 500",
    description: "Saleor Card 500",
    image: "Saleor_Card_500",
    categories: ["Gift cards", "Accessories"],
    stocks: [
      {
        variant: "",
        price: 500.0,
        quatity: 10,
      },
    ],
    range: "$500.00",
  },
  {
    id: 16,
    name: "Saleor Grey Hoodie",
    description: "Beautiful Grey Hoodie",
    image: "Saleor_Grey_Hoodie",
    categories: ["Sweatshirts", "Apparel"],
    stocks: [
      {
        variant: "XL",
        price: 18.0,
        quatity: 50,
      },
    ],
    range: "$18.00",
  },
  {
    id: 17,
    name: "Saleor Book about Headless Commerce",
    description: "Launch new markets fast",
    image: "Saleor_Book_about_Headless_Commerce",
    categories: ["Audiobooks", "Accessories"],
    stocks: [
      {
        variant: "",
        price: 10.0,
        quatity: 11,
      },
    ],
    range: "$10.00",
  },
  {
    id: 18,
    name: "Saleor Mighty Mug",
    description:
      "Tonight, my love, let us take fat brushes and paint the skies with the shades of nebula tides. Best for the darkest, moody shades of the coffee you can brew.",
    image: "Saleor_Mighty_Mug",
    categories: ["Homewares", "Accessories"],
    stocks: [
      {
        variant: "",
        price: 11.99,
        quatity: 111,
      },
    ],
    range: "$11.99",
  },
  {
    id: 19,
    name: "Saleor Dimmed Sunnies Sunglasses",
    description: "Dimmed Sunnies Sunglasses from Saleor",
    image: "Saleor_Dimmed_Sunnies_Sunglasses",
    categories: ["Sunglasses", "Apparel"],
    stocks: [
      {
        variant: "",
        price: 17.0,
        quatity: 30,
      },
    ],
    range: "$17.00",
  },
  {
    id: 20,
    name: "Saleor Beanie",
    description: "Saleor Beanie",
    image: "Saleor_Beanie",
    categories: ["Beanies", "Apparel"],
    stocks: [
      {
        variant: "",
        price: 10.0,
        quatity: 60,
      },
    ],
    range: "$10.00",
  },
  {
    id: 21,
    name: "Saleor Reversed T-shirt",
    description:
      "Wondering if this will look as good on you as it does on the screen? The answer is yes. A quality Monospace Tee variant art with smart styling.",
    image: "Saleor_Reversed_T-shirt",
    categories: ["T-shirts", "Apparel"],
    stocks: [
      {
        variant: "L",
        price: 22.5,
        quatity: 0,
      },
      {
        variant: "XL",
        price: 22.5,
        quatity: 5,
      },
      {
        variant: "XXL",
        price: 22.5,
        quatity: 6,
      },
    ],
    range: "$22.50",
  },
  {
    id: 22,
    name: "Saleor Neck Warmer",
    description: "",
    image: "Saleor_Neck_Warmer",
    categories: ["Scarfs", "Apparel"],
    stocks: [
      {
        variant: "",
        price: 18.0,
        quatity: 0,
      },
    ],
    range: "$18.00",
  },
  {
    id: 23,
    name: "Saleor Cushion",
    description:
      "Minimalist interiors need simple, sleek soft furnishings. Set your own trends with Saleor designs.",
    image: "Saleor_Cushion",
    categories: ["Accessories"],
    stocks: [
      {
        variant: "",
        price: 18.0,
        quatity: 24,
      },
    ],
    range: "$18.00",
  },
  {
    id: 24,
    name: "Saleor White Hoodie",
    description: "A beautiful white Hoodie",
    image: "Saleor_White_Hoodie",
    categories: ["Apparel"],
    stocks: [
      {
        variant: "X",
        price: 35.0,
        quatity: 11,
      },
    ],
    range: "$35.00",
  },
  {
    id: 25,
    name: "White Parrot Cushion",
    description:
      "Minimalist interiors need simple, sleek soft furnishings. Don’t parrot what others do, set your own monochrome trends with Saleor designs.",
    image: "White_Parrot_Cushion",
    categories: ["Homewares", "Accessories"],
    stocks: [
      {
        variant: "",
        price: 50.0,
        quatity: 22,
      },
    ],
    range: "$50.00",
  },
  {
    id: 26,
    name: "Saleor White Plimsolls Shoes",
    description:
      "PE at school wouldn’t have been such a drag with these on your feet. Slip on the style and stride tall with Saleor branded plimsolls. PE now stands for pretty elegant.",
    image: "Saleor_White_Plimsolls_Shoes",
    categories: ["Shoes"],
    stocks: [
      {
        variant: "39",
        price: 80.0,
        quatity: 5,
      },
      {
        variant: "40",
        price: 80.0,
        quatity: 5,
      },
      {
        variant: "41",
        price: 80.0,
        quatity: 5,
      },
      {
        variant: "42",
        price: 80.0,
        quatity: 5,
      },
      {
        variant: "43",
        price: 80.0,
        quatity: 5,
      },
      {
        variant: "44",
        price: 80.0,
        quatity: 5,
      },
      {
        variant: "45",
        price: 80.0,
        quatity: 5,
      },
    ],
    range: "$80.00",
  },
];

export default products;
