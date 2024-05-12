"use client";
import style from "./CreateAward.module.css";
import React from "react";
import { ImageInput } from "@/shared";
import { useCreateAward } from "./lib/hook";

type PropsType = {
    loc: string;
    add_title: string;
    add_year: string;
    add_type: string;
    create: string;
};

export const CreateAward = ({ ...props }: PropsType) => {
    const data = useCreateAward({ loc: props.loc });

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
                    value={data.year}
                    disabled={data.loading}
                    onChange={(e) => {
                        data.setYear(Number(e.target.value));
                    }}
                    type={"number"}
                    className={style.inputTitle}
                    placeholder={props.add_year}
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
