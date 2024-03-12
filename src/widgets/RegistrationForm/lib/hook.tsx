"use client";
import { useState, useEffect } from "react";
import { Context as GlobalContext } from "@/shared/api";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export const useRegistration = ({ loc }: { loc: string }) => {
    const { store } = useContext(GlobalContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let router = useRouter();

    const Registration = () => {
        store.auth
            .registration(username, password)
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                store.user
                    .getProfile()
                    .then((response) => {
                        store.profile = response.data;
                        store.isAuth = true;
                        console.log(store.profile);
                        router.push(`/${loc}`);
                    })
                    .catch();
            })
            .catch((error) => {
                console.log("ошибка в login form ?");
            });
    };

    useEffect(() => {
        if (store.isAuth) {
            router.push(`/${loc}`);
        }
    }, []);

    return {
        router,
        username,
        setUsername,
        password,
        setPassword,
        Registration
    };
};
