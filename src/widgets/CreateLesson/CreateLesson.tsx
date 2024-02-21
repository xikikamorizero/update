"use client";
import style from "./CreateLesson.module.css";
import { useLesson } from "./lib/hook";
import React from "react";
import { EditorJsEdit } from "@/entities/EditorJsEdit/EditorJsEdit";
import { ImageInput } from "@/shared";

export const CreateLesson = ({loc}:{loc:string}) => {
    const data = useLesson({loc});
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <input
                    value={data.title}
                    onChange={(e) => {
                        data.setTitle(e.target.value);
                    }}
                    type={"text"}
                    className={style.inputTitle}
                    placeholder={"add title"}
                />
                <input
                    value={data.description}
                    onChange={(e) => {
                        data.setDescription(e.target.value);
                    }}
                    type={"text"}
                    className={style.inputTitle}
                    placeholder={"add description"}
                />
                <input
                    value={data.lessonNumber}
                    onChange={(e) => {
                        data.SetLessonNumber(e.target.value);
                    }}
                    type={"text"}
                    className={style.inputTitle}
                    placeholder={"add lesson number"}
                />

                <div className={style.inputImage}>
                    <ImageInput
                        image={data.uploadedImages}
                        setImage={data.setUploadedImages}
                    />
                </div>

                <EditorJsEdit
                    editorData={data.content}
                    setEditorData={data.setContent}
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
