"use client";
import style from "./CreatePortfolio.module.css";
import React from "react";
import { EditorJsEdit } from "../../entities/EditorJsEdit/EditorJsEdit";
import { ImageInput } from "@/shared";
import { useCreatePortfolio } from "./lib/hook";

type PropsType = {
    loc: string;
    add_title: string;
    add_category: string;
    add_type: string;
    create: string;
};

export const CreatePortfolio = ({ ...props }: PropsType) => {
    const data = useCreatePortfolio({ loc: props.loc });

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
                    placeholder={props.add_title}
                />
                <input
                    value={data.category}
                    disabled={data.loading}
                    onChange={(e) => {
                        data.setCategory(e.target.value);
                    }}
                    type={"text"}
                    className={style.inputTitle}
                    placeholder={props.add_category}
                />
                <input
                    value={data.type}
                    disabled={data.loading}
                    onChange={(e) => {
                        data.setType(e.target.value);
                    }}
                    type={"text"}
                    className={style.inputTitle}
                    placeholder={props.add_type}
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
                    {props.create}
                </button>
            </div>
        </div>
    );
};
