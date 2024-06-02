"use client";
import { baseUrl } from "@/shared/api/const";
import style from "./Education.module.css";
import { useEducation } from "./lib/hook";
import { observer } from "mobx-react-lite";
import { ImageInput } from "@/shared";
import React from "react";
import { Preloader } from "@/shared/Preloader/Preloader";
import { DocsUploade } from "../CreateAward/DocsUploader";
import Link from "next/link";

type PropsType = {
    loc: string;
    id: string;
    date: string;
    editDate: string;
    editTitle: string;
    save: string;
    edit: string;
    delete: string;
    linkT: string;
    add_docsT: string;
};
export const Education = observer(({ ...props }: PropsType) => {
    const data = useEducation({
        id: props.id,
        loc: props.loc,
    });
    return (
        <div className={style.wrapper}>
            {data.contextHolder}
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

                <div className={style.panel}>
                    {!data.editMode ? (
                        <p className={style.subInfo}>
                            {props.date}: {data.education?.date}
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

                    {!data.editMode ? (
                        data.education?.docs &&
                        <Link
                            className={style.link}
                            href={baseUrl + data.education?.docs}
                            target={"_blank"}
                        >
                            {props.linkT}
                        </Link>
                    ) : (
                        <DocsUploade
                            fileList={data.file}
                            setFileList={data.setFile}
                            add_docs={props.add_docsT}
                        />
                    )}

                    {data.profile?.id == data.education?.userId && (
                        <div className={style.buttonContainer}>
                            <button
                                disabled={!data.education || data.loading}
                                className={style.deleteButton}
                                onClick={() => {
                                    data.Delete();
                                }}
                            >
                                {data.loading ? (
                                    <div className={style.preloadCo}>
                                        <Preloader />
                                    </div>
                                ) : (
                                    props.delete
                                )}
                            </button>
                            <button
                                disabled={!data.education || data.loading}
                                className={style.editButton}
                                onClick={() => {
                                    if (data.editMode) {
                                        data.Edit();
                                    }
                                    data.setEditMode(!data.editMode);
                                }}
                            >
                                {data.loading ? (
                                    <div className={style.preloadCo}>
                                        <Preloader />
                                    </div>
                                ) : data.editMode ? (
                                    props.save
                                ) : (
                                    props.edit
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
});
