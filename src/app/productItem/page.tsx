"use client";
import React from "react";
import styles from "./ProductItem.module.scss";

function ProductItem() {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISdF-P0vkqxXvnUzn8dHA4Ti9pT9bHsxa4w&s"
        width={200}
        height={200}
        alt="test"
      />
      <h1 className={styles.title}>عنوان محصول : ساعت جی شاک1</h1>
    </div>
  );
}

export default ProductItem;
