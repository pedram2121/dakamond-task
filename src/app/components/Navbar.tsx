"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { title: "auther", href: "/auther" },
    { title: "dashboard", href: "/dashboard" },
  ];

  return (
    <nav className={styles.nav}>
      {navLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${styles.link} ${
            pathname === item.href ? styles.active : ""}`} >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
