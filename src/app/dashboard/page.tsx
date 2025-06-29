"use client";
import React from "react";
import Container from "../components/Container";
import ProductItem from "../productItem/page";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  return (
    <Container>
      <div className={styles.wrapper}>
        <ProductItem />
        <ProductItem />
      </div>
    </Container>
  );
}

export default Dashboard;
