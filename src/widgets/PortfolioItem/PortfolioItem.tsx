"use client";
import style from "./PortfolioItem.module.css";
import { usePortfolio } from "./lib/hook";
import { observer } from "mobx-react-lite";
import React from "react";
import { EditorJs } from "@/entities/EditorJs/EditorJs";
import "./index.css";

type PropsType = {
    portfolioId: string;
};
export const PortfolioItem = observer(({ portfolioId }: PropsType) => {
    const data = usePortfolio({
        portfolioId: portfolioId,
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
                        placeholder={"editTitle"}
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
                        category:{data.portfolio?.category}
                    </p>
                ) : (
                    <input
                        className={`${style.subInput} ${style.subInfo}`}
                        value={data.category}
                        onChange={(e) => {
                            data.setCategory(e.target.value);
                        }}
                        type={"text"}
                        placeholder={"editCategory"}
                    />
                )}

                {!data.editMode ? (
                    <p className={style.subInfo}>type:{data.portfolio?.type}</p>
                ) : (
                    <input
                        className={`${style.subInput} ${style.subInfo}`}
                        value={data.type}
                        onChange={(e) => {
                            data.setType(e.target.value);
                        }}
                        type={"text"}
                        placeholder={"editType"}
                    />
                )}

                {data.profile?.id == data.portfolio?.userId && (
                    <div className={style.buttonContainer}>
                        <button
                            disabled={!data.portfolio}
                            className={style.deleteButton}
                            onClick={() => {
                                data.DeletePortfolio();
                            }}
                        >
                            Delete
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
                            {data.editMode ? "Save" : "Edit"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
});
