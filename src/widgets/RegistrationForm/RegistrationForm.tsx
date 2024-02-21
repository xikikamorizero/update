"use client";
import style from "./RegistrationForm.module.css";
import { CloseCircle } from "iconsax-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const RegistrationForm = () => {
    let router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={style.formContainer}>
            <input
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
                className={style.inputLogin}
                type={"text"}
                placeholder={"username"}
            />
            <input
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                className={style.inputLogin}
                type={"text"}
                placeholder={"password"}
            />
            <div className={style.buttonLogin}>Create account</div>
            <CloseCircle
                onClick={() => {
                    router.push("/");
                }}
                className={style.closeIcon}
                size="32"
                color="#000000"
            />
        </div>
    );
};
