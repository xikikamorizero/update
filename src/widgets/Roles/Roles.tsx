"use client";
import style from "./Roles.module.css";
import React from "react";
import { useRoles } from "./lib/hook";
import { Preloader } from "@/shared/Preloader/Preloader";

type PropsType = {
    loc: string;
    create:string;
};

export const Roles = ({ ...props }: PropsType) => {
    const data = useRoles({ loc: props.loc });

    return (
        <div className={style.wrapper}>
            {data.contextHolder}
            <div className={style.container}>
                <input
                    value={data.value}
                    disabled={data.loading}
                    onChange={(e) => {
                        data.setValue(e.target.value);
                    }}
                    type={"text"}
                    className={style.inputTitle}
                />
                <input
                    value={data.userId}
                    disabled={data.loading}
                    onChange={(e) => {
                        data.setUserId(e.target.value);
                    }}
                    type={"text"}
                    className={style.inputTitle}
                />

                <button
                    disabled={data.loading}
                    className={style.buttonCreate}
                    onClick={() => {
                        data.Create();
                    }}
                >
                    {data.loading ? (
                        <div className={style.preloadCo}>
                            <Preloader />
                        </div>
                    ) : (
                        props.create
                    )}
                </button>
            </div>
        </div>
    );
};
