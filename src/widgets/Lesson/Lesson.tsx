"use client";
import { useLesson } from "./lib/hook";
import style from "./Lesson.module.css";
import { observer } from "mobx-react-lite";
import React from "react";
import { EditorJs } from "../../entities/EditorJs/EditorJs";
import { AccessDenied } from "@/shared";

type PropsType = {
    lessonId: string;
    loc: string;
    accessdenied: string;
};

export const Lesson = observer(({ lessonId, loc, accessdenied }: PropsType) => {
    const data = useLesson({ lessonId, loc });
    if (data.error) {
        return <AccessDenied text={accessdenied} />;
    }
    return (
        <div className={style.wrapper}>
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

                {!data.editMode ? (
                    <p className={style.title}>{data.lesson?.description}</p>
                ) : (
                    <input
                        className={`${style.titleInput} ${style.title}`}
                        value={data.description}
                        onChange={(e) => {
                            data.setDescription(e.target.value);
                        }}
                        type={"text"}
                        placeholder={"editDescription"}
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
                {data.profile?.id == Number(data.authorId) && (
                    <div className={style.buttonContainer}>
                        <button
                            disabled={!data.lesson}
                            className={style.deleteButton}
                            onClick={() => {
                                data.DeleteLesson();
                            }}
                        >
                            Delete
                        </button>
                        <button
                            disabled={!data.lesson}
                            className={style.editButton}
                            onClick={() => {
                                if (data.editMode) {
                                    data.EditLesson();
                                }
                                data.setEditMode(!data.editMode);
                            }}
                        >
                            {data.editMode ? "Save" : "Edit"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
});
