"use client";
import { baseUrl } from "@/shared/api/const";
import style from "./Education.module.css";
import { useEducation } from "./lib/hook";
import { observer } from "mobx-react-lite";
import { ImageInput } from "@/shared";
import React from "react";

type PropsType = {
    loc: string;
    id: string;
    date: string;
    editDate: string;
    editTitle: string;
    save: string;
    edit: string;
    delete: string;
};
export const Education = observer(({ ...props }: PropsType) => {
    const data = useEducation({
        id: props.id,
        loc: props.loc,
    });
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {!data.editMode ? (
                    <p className={style.title}>{data.education?.title}</p>
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

                {!data.editMode ? (
                    <img
                        src={`${baseUrl}/${data.education?.image}`}
                        className={style.image}
                    />
                ) : (
                    <div className={style.inputImage}>
                    <ImageInput
                        image={data.uploadedImages}
                        setImage={data.setUploadedImages}
                    />
                </div>
                )}

              

                {!data.editMode ? (
                    <p className={style.subInfo}>
                        {props.date}: {data.date}
                    </p>
                ) : (
                    <input
                        className={`${style.subInput} ${style.subInfo}`}
                        value={data.date}
                        onChange={(e) => {
                            data.setDate(e.target.value);
                        }}
                        type={"text"}
                        placeholder={props.editDate}
                    />
                )}


                {data.profile?.id == data.education?.userId && (
                    <div className={style.buttonContainer}>
                        <button
                            disabled={!data.education}
                            className={style.deleteButton}
                            onClick={() => {
                                data.Delete();
                            }}
                        >
                            {props.delete}
                        </button>
                        <button
                            disabled={!data.education}
                            className={style.editButton}
                            onClick={() => {
                                if (data.editMode) {
                                    data.Edit();
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
