"use client";
import style from "./LoginForm.module.css";
import { CloseCircle } from "iconsax-react";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Context } from "@/shared/api";
import Link from "next/link";

export const LoginForm = () => {
    let router = useRouter();
    const { store } = useContext(Context);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (store.isAuth) {
            router.push("/");
        }
    }, []);

    const Login = () => {
        store.auth
            .login(username, password)
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                store.user
                    .getProfile()
                    .then((response) => {
                        store.profile = response.data;
                        store.isAuth = true;
                        console.log(store.profile);
                        router.push("/");
                    })
                    .catch();
            })
            .catch((error) => {
                console.log('что за хуйня ?');
            });
    };

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
            <div
                className={style.buttonLogin}
                onClick={() => {
                    Login();
                }}
            >
                log in
            </div>
            <div className={style.newAccBlock}>
                <p className={style.newAccBlockText}>no account ?</p>
                <Link href={"/registration"}>create</Link>
            </div>
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
