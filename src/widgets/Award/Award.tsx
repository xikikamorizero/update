"use client";
import { baseUrl } from "@/shared/api/const";
import style from "./Award.module.css";
import { useAward } from "./lib/hook";
import { observer } from "mobx-react-lite";
import { ImageInput } from "@/shared";
import React from "react";
import { Preloader } from "@/shared/Preloader/Preloader";

type PropsType = {
    loc: string;
    id: string;
    year: string;
    type: string;
    editType: string;
    editYear: string;
    editTitle: string;
    save: string;
    edit: string;
    delete: string;
};
export const Award = observer(({ ...props }: PropsType) => {
    const data = useAward({
        id: props.id,
        loc: props.loc,
    });
    return (
        <div className={style.wrapper}>
            {data.contextHolder}
            <div className={style.container}>
                {!data.editMode ? (
                    <p className={style.title}>{data.award?.title}</p>
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
                        src={`${baseUrl}/${data.award?.image}`}
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
                        {props.type}: {data.award?.type}
                    </p>
                ) : (
                    <input
                        className={`${style.subInput} ${style.subInfo}`}
                        value={data.type}
                        onChange={(e) => {
                            data.setType(e.target.value);
                        }}
                        type={"text"}
                        placeholder={props.editType}
                    />
                )}

                {!data.editMode ? (
                    <p className={style.subInfo}>
                        {props.year}: {data.award?.year}
                    </p>
                ) : (
                    <input
                        type={"number"}
                        className={`${style.subInput} ${style.subInfo}`}
                        value={data.year}
                        onChange={(e) => {
                            data.setYear(Number(e.target.value));
                        }}
                        placeholder={props.editYear}
                    />
                )}

                {data.profile?.id == data.award?.userId && (
                    <div className={style.buttonContainer}>
                        <button
                            disabled={!data.award || data.loading}
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
                            disabled={!data.award || data.loading}
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
    );
});
