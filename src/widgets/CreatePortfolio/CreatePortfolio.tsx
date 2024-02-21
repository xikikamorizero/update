"use client";
import style from "./CreatePortfolio.module.css";
import React from "react";
import { EditorJsEdit } from "../../entities/EditorJsEdit/EditorJsEdit";
import { ImageInput } from "@/shared";
import { useCreatePortfolio } from "./lib/hook";

export const CreatePortfolio = ({loc}:{loc:string}) => {
    const data = useCreatePortfolio({loc});
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <input
                    value={data.title}
                    disabled={data.loading}
                    onChange={(e) => {
                        data.setTitle(e.target.value);
                    }}
                    type={"text"}
                    className={style.inputTitle}
                    placeholder={"add title"}
                />
                <input
                    value={data.category}
                    disabled={data.loading}
                    onChange={(e) => {
                        data.setCategory(e.target.value);
                    }}
                    type={"text"}
                    className={style.inputTitle}
                    placeholder={"add category"}
                />
                <input
                    value={data.type}
                    disabled={data.loading}
                    onChange={(e) => {
                        data.setType(e.target.value);
                    }}
                    type={"text"}
                    className={style.inputTitle}
                    placeholder={"add type"}
                />
                <div className={style.inputImage}>
                    <ImageInput
                        image={data.uploadedImages}
                        setImage={data.setUploadedImages}
                    />
                </div>

                <EditorJsEdit
                    editorData={data.data}
                    setEditorData={data.setData}
                />
                <button
                    disabled={data.loading}
                    className={style.buttonCreate}
                    onClick={() => {
                        data.Create();
                    }}
                >
                    Create
                </button>
            </div>
        </div>
    );
};
