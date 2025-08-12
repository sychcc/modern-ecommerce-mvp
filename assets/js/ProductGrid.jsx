import React from "react";
import ProductCard from "./ProductCard"; // 引入 ProductCard 組件

// 這個組件叫做 ProductGrid，負責顯示多個商品
const ProductGrid = () => {
  // 商品資料陣列
  const products = [
    {
      id: "urban-drift-bucket-hat",
      name: "Urban Drift Bucket Hat",
      price: 15,
      originalPrice: null,
      image: "/assets/images/product_pic/urban_hat.png",
      colors: ["black", "white"],
    },
    {
      id: "tangerine-mini-tote",
      name: "Tangerine Mini Tote",
      price: 150,
      originalPrice: null,
      image: "/assets/images/product_pic/mini_tote.png",
      colors: ["orange"],
    },
    {
      id: "elemental-sneakers",
      name: "Elemental Sneakers",
      price: 80,
      originalPrice: 100,
      image: "/assets/images/product_pic/sneakers.png",
      colors: ["beige"],
    },
    {
      id: "metro-hoodie",
      name: "Metro Hoodie",
      price: 81,
      originalPrice: 90,
      image: "/assets/images/product_pic/voyager.png",
      colors: ["black"],
    },
    {
      id: "sunbeam-mules",
      name: "Sunbeam Mules",
      price: 68,
      originalPrice: 85,
      image: "/assets/images/product_pic/heels.png",
      colors: ["yellow"],
    },
    {
      id: "azure-attitude-shades",
      name: "Azure Attitude Shades",
      price: 45,
      originalPrice: null,
      image: "/assets/images/product_pic/attitude_shades.png",
      colors: ["blue"],
    },
    {
      id: "voyager-hoodie",
      name: "Voyager Hoodie",
      price: 76,
      originalPrice: 95,
      image: "/assets/images/product_pic/voyager.png",
      colors: ["green", "brown"],
    },
    {
      id: "la-baseball-hat",
      name: "LA Baseball Hat",
      price: 20,
      originalPrice: null,
      image: "/assets/images/product_pic/baseball_hat.png",
      colors: ["black"],
    },
  ];

  return (
    <div className="product-grid-container">
      {/* 標題 */}
      <h2 className="product-grid-title">Latest Arrivals</h2>

      {/* 商品網格 */}
      <div className="product-grid">
        {/* 用 map 把每個商品資料傳給 ProductCard 組件 */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product} // 把商品資料傳給 ProductCard
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
