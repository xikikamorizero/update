"use client";
import style from "./AdminPanel.module.css";
import React from "react";
import { useAdminPanel } from "./lib/hook";
import { CardTypePortfolio } from "@/shared/CardTypePortfolio/CardTypePortfolio";
import { useState } from "react";
import { Preloader } from "@/shared/Preloader/Preloader";

type PropsType = {
    loc: string;

    title_enT?: string;
    title_ruT?: string;
    title_uzT?: string;
    descriptionT?: string;
    countT?: string;

    controlT:string;
};

export const AdminPanel = ({ ...props }: PropsType) => {
    const data = useAdminPanel({ loc: props.loc });

    const [editM, setEditM] = useState(false);

    return (
        <div className={style.wrapper}>
            {data.loading ? (
                <div className={style.preloader}>
                    <Preloader />
                </div>
            ) : (
                <div className={style.container}>
                    <div className={style.projectWrapper}>
                        <div className={style.projectContainer}>
                            {data.types
                                ?.slice()
                                .sort((a, b) => a.id - b.id)
                                .map((a, i) => (
                                    <CardTypePortfolio
                                        key={i}
                                        id={String(a.id)}
                                        editMode={editM}
                                        title_en={a.valueEn}
                                        title_ru={a.valueRu}
                                        title_uz={a.valueUz}
                                        description={a.description}
                                        title_enT={props.title_enT}
                                        title_ruT={props.title_ruT}
                                        title_uzT={props.title_uzT}
                                        descriptionT={props.descriptionT}
                                        count={a.count}
                                        hrefAuthor={`/${props.loc}/users/${a.userId}`}
                                        re={data.Re}
                                        countT={props.countT}
                                    />
                                ))}

                            {editM && (
                                <CardTypePortfolio
                                    id={"1"}
                                    editMode={editM}
                                    title_en={""}
                                    title_ru={""}
                                    title_uz={""}
                                    description={""}
                                    create={"true"}
                                    title_enT={props.title_enT}
                                    title_ruT={props.title_ruT}
                                    title_uzT={props.title_uzT}
                                    descriptionT={props.descriptionT}
                                    hrefAuthor={`/${props.loc}/users`}
                                    re={data.Re}
                                />
                            )}
                        </div>
                    </div>
                    <div
                        className={style.create}
                        onClick={() => {
                            setEditM(!editM);
                        }}
                    >
                        {props.controlT}
                    </div>
                </div>
            )}
        </div>
    );
};
