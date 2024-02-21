"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

export const useProfile = () => {
    const { store } = useContext(GlobalContext);
    let router = useRouter();

    // useEffect(() => {
    //     if (!store.isAuth) {
    //         router.push("/login");
    //     }
    // }, [store.isAuth]);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            store.user
                .getProfile()
                .then((response) => {
                    store.profile = response.data;
                    store.isAuth = true;
                    console.log(store.profile);
                })
                .catch(() => {
                    store.isAuth = false;
                });
        }
    }, [store.update_profile]);

    return {
        store: store,
    };
};
