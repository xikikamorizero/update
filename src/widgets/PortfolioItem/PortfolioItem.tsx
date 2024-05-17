"use client";
import style from "./PortfolioItem.module.css";
import { usePortfolio } from "./lib/hook";
import { observer } from "mobx-react-lite";
import React from "react";
import { EditorJs } from "@/entities/EditorJs/EditorJs";
import "./index.css";
import Link from "next/link";

type PropsType = {
    loc: string;
    portfolioId: string;
    category: string;
    type: string;
    editType: string;
    editCategory: string;
    editTitle: string;
    save: string;
    edit: string;
    delete: string;
    creator: string;
};
export const PortfolioItem = observer(({ ...props }: PropsType) => {
    const data = usePortfolio({
        portfolioId: props.portfolioId,
        loc: props.loc,
    });
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {!data.editMode ? (
                    <p className={style.title}>{data.portfolio?.title}</p>
                ) : (
                    <input
                        className={`${style.titleInput} ${style.title}`}
                        value={data.title}
                        onChange={(e) => {
                            data.setTitle(e.target.value);
                        }}
                        type={"text"}
                        placeholder={props.editTitle}
                    />
                )}
                {data.portfolio?.content ? (
                    <EditorJs
                        data={data.portfolio}
                        editMode={data.editMode}
                        dataEditor={JSON.parse(data.dataEditor)}
                        setDataEditor={data.setDataEditor}
                        editorData={JSON.parse(data.portfolio.content)}
                    />
                ) : null}

                {!data.editMode ? (
                    <p className={style.subInfo}>
                        {props.category}:{data.portfolio?.category}
                    </p>
                ) : (
                    <input
                        className={`${style.subInput} ${style.subInfo}`}
                        value={data.category}
                        onChange={(e) => {
                            data.setCategory(e.target.value);
                        }}
                        type={"text"}
                        placeholder={props.editCategory}
                    />
                )}

                {!data.editMode ? (
                    <p className={style.subInfo}>
                        {props.type}:
                        {props.loc == "ru"
                            ? data.portfolio?.type?.valueRu
                            : props.loc == "en"
                            ? data.portfolio?.type?.valueEn
                            : data.portfolio?.type?.valueUz}
                    </p>
                ) : (
                    <input
                        className={`${style.subInput} ${style.subInfo}`}
                        value={data.type}
                        onChange={(e) => {
                            data.setType(Number(e.target.value));
                        }}
                        type={"number"}
                        placeholder={props.editType}
                    />
                )}

                <Link href={`/${props.loc}/users/${data.portfolio?.userId}`}>
                    {props.creator}
                </Link>

                {data.profile?.id == data.portfolio?.userId && (
                    <div className={style.buttonContainer}>
                        <button
                            disabled={!data.portfolio}
                            className={style.deleteButton}
                            onClick={() => {
                                data.DeletePortfolio();
                            }}
                        >
                            {props.delete}
                        </button>
                        <button
                            disabled={!data.portfolio}
                            className={style.editButton}
                            onClick={() => {
                                if (data.editMode) {
                                    data.EditPortfolio();
                                }
                                data.setEditMode(!data.editMode);
                            }}
                        >
                            {data.editMode ? props.save : props.edit}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
});
