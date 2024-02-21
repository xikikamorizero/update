"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const useLesson = ({loc}:{loc:string}) => {
    let router = useRouter();
    let path = useSearchParams();
    let courseId = path.get("course");
    const global_store = useContext(GlobalContext);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [description, setDescription] = useState("");
    const [lesson_number, SetLessonNumber] = useState("");
    const [readingMaterials, setReadingMaterials] = useState<string[]>([]);
    const [uploadedImages, setUploadedImages] = useState<File|null>(null);

    function createLesson() {
        if (!loading && courseId) {
            setLoading(true);
            global_store.store.lesson
                .create({
                    courseId,
                    title,
                    content,
                    description,
                    lesson_number,
                    image: uploadedImages,
                })
                .then((response) => {
                    router.push(`/${loc}/course/${courseId}`);
                })
                .catch((error) => {
                    console.log("ошибка при создании урока");
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    return {
        Create: createLesson,
        loading: loading,
        title: title,
        setTitle: setTitle,
        description: description,
        setDescription: setDescription,
        content: content,
        setContent: setContent,
        readingMaterials: readingMaterials,
        setReadingMaterials: setReadingMaterials,
        lessonNumber: lesson_number,
        SetLessonNumber: SetLessonNumber,
        uploadedImages: uploadedImages,
        setUploadedImages: setUploadedImages,
    };
};
