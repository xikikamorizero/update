"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { notification } from "antd";

type Props = {
    loc:string
    titleError:string;
    description:string;
}

export const useLesson = ({...props}:Props) => {
    let router = useRouter();
    let path = useSearchParams();
    let courseId = path.get("course");
    const global_store = useContext(GlobalContext);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [description, setDescription] = useState("");
    const [lesson_number, SetLessonNumber] = useState(0);
    const [readingMaterials, setReadingMaterials] = useState<string[]>([]);
    const [uploadedImages, setUploadedImages] = useState<File|null>(null);

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = () => {
        api["error"]({
            message: props.titleError,
            description: props.description,
        });
    };
    const openNotificationWithIconSt = (status:number) => {
        api["error"]({
            message: status,
            description: "Error when creating lesson",
        });
    };

    function createLesson() {
        if (!loading && courseId) {
            if(description.length<250){
                setLoading(true);
                global_store.store.lesson
                    .create({
                        courseId,
                        title,
                        content,
                        description,
                        lesson_number:String(lesson_number),
                        image: uploadedImages,
                    })
                    .then((response) => {
                        router.push(`/${props.loc}/course/${courseId}`);
                    })
                    .catch((error) => {
                        openNotificationWithIconSt(error.request.status);
                        setLoading(false);
                    })
            }
            else{
                openNotificationWithIcon()
            }
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
        contextHolder
    };
};
