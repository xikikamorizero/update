"use client";
import style from "./CreateEducation.module.css";
import React from "react";
import { ImageInput } from "@/shared";
import { useCreateEducation } from "./lib/hook";
import { Preloader } from "@/shared/Preloader/Preloader";
import { DocsUploade } from "../CreateAward/DocsUploader";

type PropsType = {
    loc: string;
    add_title: string;
    add_year: string;
    create: string;
    add_docs:string;
};

export const CreateEducation = ({ ...props }: PropsType) => {
    const data = useCreateEducation({ loc: props.loc });

    return (
        <div className={style.wrapper}>
            {data.contextHolder}
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
                    value={data.date}
                    disabled={data.loading}
                    onChange={(e) => {
                        data.setDate(e.target.value);
                    }}
                    type={"text"}
                    className={style.inputTitle}
                    placeholder={props.add_year}
                />

                <div className={style.inputImage}>
                    <ImageInput
                        image={data.uploadedImages}
                        setImage={data.setUploadedImages}
                    />
                </div>

                <DocsUploade fileList={data.file} setFileList={data.setFile} add_docs={props.add_docs} />

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
