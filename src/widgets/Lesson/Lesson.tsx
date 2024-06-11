"use client";
import { useLesson } from "./lib/hook";
import style from "./Lesson.module.css";
import { observer } from "mobx-react-lite";
import React from "react";
import { EditorJs } from "../../entities/EditorJs/EditorJs";
import { AccessDenied, ImageInput } from "@/shared";
import { Preloader } from "@/shared/Preloader/Preloader";

type PropsType = {
    lessonId: string;
    loc: string;
    accessdenied: string;
    deleteT: string;
    saveT: string;
    editT: string;

    descriptionT: string;
};

export const Lesson = observer(
    ({
        lessonId,
        loc,
        accessdenied,
        deleteT,
        saveT,
        editT,
        descriptionT,
    }: PropsType) => {
        const data = useLesson({ lessonId, loc });
        if (data.error) {
            return <AccessDenied text={accessdenied} />;
        }

        console.log(!data.lesson || data.loading);
        return (
            <div className={style.wrapper}>
                {data.contextHolder}
                {data.loading ? (
                    <div className={style.preloaderContainer}>
                        <div className={style.preloader}>
                            <Preloader />
                        </div>
                    </div>
                ) : (
                    <div className={style.container}>
                        {!data.editMode ? (
                            <p className={style.title}>{data.lesson?.title}</p>
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

                        {data.editMode && (
                            <div className={style.uploadContainer}>
                                <div className={style.inputImage}>
                                    <ImageInput
                                        image={data.uploadedImages}
                                        setImage={data.setUploadedImages}
                                    />
                                </div>
                            </div>
                        )}

                        {data.editMode && (
                            <input
                                className={`${style.titleInput} ${style.title}`}
                                value={data.lessonNumber}
                                onChange={(e) => {
                                    data.setLessonNumber(e.target.value);
                                }}
                                type={"text"}
                                placeholder={"editLessonNumber"}
                            />
                        )}

                        {data.lesson?.content ? (
                            <EditorJs
                                data={data.lesson}
                                editMode={data.editMode}
                                dataEditor={JSON.parse(data.dataEditor)}
                                setDataEditor={data.setDataEditor}
                                editorData={JSON.parse(data.lesson.content)}
                            />
                        ) : null}

                        {!data.editMode ? (
                            data.lesson?.description ? (
                                <p className={style.description}>
                                    {descriptionT}: {data.lesson?.description}
                                </p>
                            ) : (
                                <></>
                            )
                        ) : (
                            <textarea
                                className={`${style.titleInput} ${style.description}`}
                                value={data.description}
                                onChange={(e) => {
                                    data.setDescription(e.target.value);
                                }}
                                placeholder={"editDescription"}
                            />
                        )}

                        {data.profile?.id == data.authorId && (
                            <div className={style.buttonContainer}>
                                <button
                                    disabled={!data.lesson || data.loading}
                                    className={style.deleteButton}
                                    onClick={() => {
                                        data.DeleteLesson();
                                    }}
                                >
                                    {data.loading ? (
                                        <div className={style.preloadCo}>
                                            <Preloader />
                                        </div>
                                    ) : (
                                        deleteT
                                    )}
                                </button>
                                <button
                                    disabled={!data.lesson || data.loading}
                                    className={style.editButton}
                                    onClick={() => {
                                        if (data.editMode) {
                                            data.EditLesson();
                                        }
                                        data.setEditMode(!data.editMode);
                                    }}
                                >
                                    {data.loading ? (
                                        <div className={style.preloadCo}>
                                            <Preloader />
                                        </div>
                                    ) : data.editMode ? (
                                        saveT
                                    ) : (
                                        editT
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
);
