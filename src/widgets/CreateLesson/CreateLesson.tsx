"use client";
import style from "./CreateLesson.module.css";
import { useLesson } from "./lib/hook";
import React from "react";
import { EditorJsEdit } from "@/entities/EditorJsEdit/EditorJsEdit";
import { ImageInput } from "@/shared";

type PropsType = {
    loc: string;
    add_title: string;
    add_description: string;
    add_lessonNumber: string;
    titleValid:string;
    descriptionValid:string;
    create: string;
};

export const CreateLesson = ({...props}:PropsType) => {
    const data = useLesson({loc:props.loc, titleError:props.titleValid, description:props.descriptionValid});
    
    return (
        <div className={style.wrapper}>
            {data.contextHolder}
            <div className={style.container}>
                <input
                    value={data.title}
                    onChange={(e) => {
                        data.setTitle(e.target.value);
                    }}
                    type={"text"}
                    className={style.inputTitle}
                    placeholder={props.add_title}
                />
                <input
                    value={data.description}
                    onChange={(e) => {
                        data.setDescription(e.target.value);
                    }}
                    type={"text"}
                    className={style.inputTitle}
                    placeholder={props.add_description}
                />
                <input
                    value={data.lessonNumber}
                    onChange={(e) => {
                        data.SetLessonNumber(e.target.value);
                    }}
                    type={"text"}
                    className={style.inputTitle}
                    placeholder={props.add_lessonNumber}
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
                    {props.create}
                </button>
            </div>
        </div>
    );
};
