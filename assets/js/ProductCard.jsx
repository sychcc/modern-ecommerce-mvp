import React, { useState } from "react";

/**
 * ProductCard 組件 - 單一商品卡片
 * @param {Object} product - 商品資料
 */
const ProductCard = ({ product }) => {
  // 安全地取得顏色陣列，如果沒有就用空陣列
  const colors = product?.colors || [];

  // 目前選擇的顏色（預設第一個）
  const [selectedColor, setSelectedColor] = useState(colors[0] || null);

  // 處理顏色切換
  const handleColorChange = (color) => {
    setSelectedColor(color);
    // 這裡可以加入切換圖片的邏輯
  };

  // 獲取顏色顯示名稱
  const getColorDisplayName = (color) => {
    if (!color) return "";
    return color.charAt(0).toUpperCase() + color.slice(1);
  };

  // 如果沒有 product 資料，不渲染任何內容
  if (!product) {
    return null;
  }

  return (
    <article className="product-card">
      {/* 商品圖片 */}
      <div className="product-card__image">
        <img
          src={product.image || ""}
          alt={product.name || "Product"}
          onError={(e) => {
            // 如果圖片載入失敗，顯示預設圖片
            e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
          }}
        />
      </div>

      {/* 商品內容 */}
      <div className="product-card__content">
        {/* 顏色標籤 */}
        {selectedColor && (
          <div className="product-card__color-label">
            {getColorDisplayName(selectedColor)}
          </div>
        )}

        {/* 商品名稱 */}
        <h3 className="product-card__name">
          {product.name || "Unknown Product"}
        </h3>

        {/* 價格 */}
        <div className="product-card__price">
          <span className="price-current">${product.price || 0}</span>
          {product.originalPrice && (
            <span className="price-original">${product.originalPrice}</span>
          )}
        </div>

        {/* 顏色選項 - 只有當有顏色時才顯示 */}
        {colors.length > 0 && (
          <div className="product-card__colors">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`color-swatch ${
                  selectedColor === color ? "color-swatch--selected" : ""
                }`}
                data-color={color}
                onClick={() => handleColorChange(color)}
                title={getColorDisplayName(color)}
              />
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
