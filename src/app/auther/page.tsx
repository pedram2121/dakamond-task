"use client";
import React, { useState } from "react";
import Container from "../components/Container";
import { useRouter } from "next/navigation";
import { fetchUser } from "../../services/api";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "./Auth.module.scss";

function Auth() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const user = await fetchUser();
    localStorage.setItem("user", JSON.stringify(user));
    router.push("/dashboard");
  };

  const valid = phone.length >= 10;

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.card}>
          <h2 className={styles.title}>Login</h2>

          <Input
            type="tel"
            placeholder="شماره تلفن"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <Button onClick={handleLogin} title="ورود" disabled={!valid} />
        </div>
      </Container>
    </div>
  );
}

export default Auth;
