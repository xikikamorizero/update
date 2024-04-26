"use client";
import { Context as GlobalContext } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type PropsType = {
    lessonId: string;
    loc: string;
};

export const useLesson = ({ lessonId, loc }: PropsType) => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);
    let router = useRouter();
    let path = useSearchParams();
    let authorId = path.get("author");
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [lessonNumber, setLessonNumber] = useState("");
    const [uploadedImages, setUploadedImages] = useState<File | null>(null);
    const [dataEditor, setDataEditor] = useState(
        store.lesson?.content ? store.lesson.content : "{}"
    );
    const [error, setError] = useState(false);

    useEffect(() => {
        if (store.lesson) {
            setTitle(store.lesson.title);
            setDescription(store.lesson.description);
            setLessonNumber(store.lesson.lesson_number);
            setDataEditor(store.lesson.content);
        }
    }, [store.lesson]);

    function EditLesson() {
        global_store.store.lesson
            .edit(
                { id: lessonId },
                {
                    title: title,
                    description: description,
                    lesson_number: lessonNumber,
                    content: dataEditor,
                    image: null,
                }
            )
            .then((response) => {
                store.lesson = response.data;
            })
            .catch((error) => {
                console.log("ошибка при Editlesson");
            })
            .finally(() => {});
    }

    function DeleteLesson() {
        global_store.store.lesson
            .delete({ id: lessonId })
            .then((response) => {
                if (response.data.success) {
                    router.push(`/${loc}/course/${store.lesson?.courseId}`);
                }
            })
            .catch((error) => {
                console.log("ошбка при DeleteLesson");
            })
            .finally(() => {});
    }

    useEffect(() => {
        if (store.lesson?.id !== Number(lessonId)) {
            store.lesson = null;
        }
        if (!store.loading) {
            store.loading = true;
            global_store.store.lesson
                .getLesson({ id: lessonId })
                .then((response) => {
                    setError(false);
                    store.lesson = response.data;
                })
                .catch((error) => {
                    setError(true);
                    console.log(error);
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }, []);

    return {
        error,
        authorId: authorId,
        lesson: store.lesson,
        loading: store.loading,
        profile: global_store.store.profile,
        EditLesson,
        DeleteLesson,
        editMode: editMode,
        setEditMode: setEditMode,
        title: title,
        setTitle: setTitle,
        description: description,
        setDescription: setDescription,
        lessonNumber: lessonNumber,
        setLessonNumber: setLessonNumber,
        uploadedImages: uploadedImages,
        setUploadedImages: setUploadedImages,
        dataEditor: dataEditor,
        setDataEditor: setDataEditor,
    };
};
