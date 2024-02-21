"use client";
import { Context } from "@/shared/api";
import style from "./Main.module.css";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";

export const Main = observer(() => {
    const { store } = useContext(Context);
    console.log(store.isAuth);
    useEffect(() => {
        store.user
            .getUsers()
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className={style.wrapper}>
            <div className={style.container}>dsdsds</div>
            <p style={{ color: "red" }}>{store.error}</p>
            <button
                onClick={() => {
                    store.isAuth = !store.isAuth;
                }}
            >
                Edit
            </button>
        </div>
    );
});
