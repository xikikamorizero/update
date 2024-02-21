"use client";
import { Context as GlobalContext } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect } from "react";

export const useCourse = ({ courseId }: { courseId: string }) => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);

    useEffect(() => {
        if (!store.loading) {
            store.loading = true;
            global_store.store.course
                .getCourseById({ id: courseId })
                .then((response) => {
                    store.course=response.data
                })
                .catch((error) => {
                    console.log("ошибка при получении курса");
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }, []);

    return {
        course: store.course,
    };
};
