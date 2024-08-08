import React, { createContext, useState } from "react";
import AddToCart from "./Components/AddToCart";
import NavBar from "./Components/NavBar";

export const myContext = createContext("");

const App = () => {
  let products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An Apple Mobile Which is Nothing like Apple...",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://images.macrumors.com/t/e0o2RzHJ5cPlD4FgyKQ5jCdSGko=/1600x/article-new/2016/05/iphone8gold.jpg",
      images: [
        "https://5.imimg.com/data5/IY/JR/MY-44062996/iphone-6_-6s_-back-cover_-bullet-proof-screen-guard-500x500.jpg",
        "https://5.imimg.com/data5/GLADMIN/Default/2023/3/EZ/JI/NH/185698171/smart-mobile-phones-500x500.jpg",
        "https://avesta.tj/wp-content/uploads/2017/11/03-5-500x250.jpg",
        "https://http2.mlstatic.com/D_NQ_NP_786573-MPE26069747956_092017-O.webp",
        "https://www.t-mobile.com/news/_admin/uploads/2022/03/nr-article-NPI-3-8-22-500x250.png",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "The iPhone X contains Apple's A11 Bionic SoC, which is a six-core processor with two cores optimized for performance, along with four cores optimized for efficiency...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "data:image/jpeg;base64,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",
      images: [
        "https://www.moneytap.com/images-ns/iPhone13pro.webp",
        "https://www.moneytap.com/images-ns/iPhone13promax.webp",
        "https://aktionen-tarife.de/1und1/inhalte/2017/12/apple-iphone-x-mit-1und1-handyvertrag.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fY36ozVTV5vjBVzvuo163uAGltbmFOZwpbIsa1nqvQ&s",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Immerse your senses in the smooth picture thanks to the screen's adaptive refresh rate of up to 90Hz. Whether you're binge-watching your favorite series, scrolling through social feeds or editing your latest video, the screen adjusts to make every motion look fluid and true-to-life...",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.ebayimg.com/images/g/uYIAAOSwZd5kCUzn/s-l1600.jpg",
      images: [
        "https://images.samsung.com/is/image/samsung/assets/in/galaxy-tab-s9/feature/galaxy-tab-s9-processor-mo.jpg",
      ],
    },
    {
      id: 4,
      title: "OPPO F19",
      description: "A special technology is applied to conceal the proximity sensor on the upper front of OPPO's smartphone for theWhole look of simplicity. It may cause abnormality of proximity function if the film or protector covers the proximity sensor area. Refer to OPPO's official layout of protector and film for details...",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail:
        "https://www.oppo.com/content/dam/oppo/product-asset-library/darwin/specs/darwin-black-purple-sliver-360.png",
      images: [
        "https://5.imimg.com/data5/GLADMIN/Default/2022/11/BI/HT/KG/71306176/youtube-500x500.jpg",
        "https://jmcomms.com/wp-content/uploads/2021/04/OppoA945G-500x250.jpg",
        "https://hamariweb.com/mobiles/LargeImages/4492_04.jpg",
        "https://i.ytimg.com/vi/8Z7L4EN0pHw/sddefault.jpg",
        "https://qph.cf2.quoracdn.net/main-qimg-d2531547907fe2b37c37e3a85a4b0de9-pjlq",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Class-leading battery life in the screen-on tests, properly fast charging. Quality display with high marks across the board. Flagship-grade performance. Great image quality overall, some of the best low-light shots money can get you...",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail:
        "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p30-pro-2.jpg",
      images: [
        "https://mobilmania.zive.cz/getthumbnail.aspx?w=20000&h=20000&q=100&id_file=424627751",
        "https://http2.mlstatic.com/D_NQ_NP_903287-MPE46656944571_072021-O.webp",
        "https://www.notebookcheck.com/fileadmin/Notebooks/News/_nc3/Huawei_P30Pro_neue_Farben_zur_IFA.jpg",
      ],
    },
    {
      id: 6,
      title: "OnePlus Nord 4",
      description: "OnePlus Nord 4 is strategically positioned with features like a Snapdragon 7 Plus Gen 3 processor, a 6.74-inch AMOLED display, a 50 MP main camera, a 5,500 mAh battery with 100 W fast charging. The Chinese company has recently launched an array of products, and we are delving into the OnePlus Nord 4 first...",
      price: 799,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail:
        "https://oasis.opstatics.com/content/dam/oasis/page/2024/global/product/avalon/gray.png",
      images: [
        "https://oasis.opstatics.com/content/dam/oasis/page/2024/global/product/avalon/green.png",
        "https://oasis.opstatics.com/content/dam/oasis/page/2024/global/product/avalon/black.png",
      ],
    },
  ];

  const [data, setData] = useState(products);

  return (
    <div>
      <NavBar />
      <div className="container">
        <myContext.Provider value={[data, setData]}>
          <AddToCart></AddToCart>
        </myContext.Provider>
      </div>
    </div>
  );
};

export default App;
