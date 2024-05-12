"use client";
import style from "./CreateEducation.module.css";
import React from "react";
import { ImageInput } from "@/shared";
import { useCreateEducation } from "./lib/hook";

type PropsType = {
    loc: string;
    add_title: string;
    add_year: string;
    create: string;
};

export const CreateEducation = ({ ...props }: PropsType) => {
    const data = useCreateEducation({ loc: props.loc });

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
