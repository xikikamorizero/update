"use client";
import { Context as GlobalContext } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect, useState } from "react";

export const useCourse = ({ courseId }: { courseId: string }) => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);

    const [error, setError] = useState(false);

    useEffect(() => {
        if (!store.loading) {
            store.loading = true;
            global_store.store.course
                .getCourseById({ id: courseId })
                .then((response) => {
                    store.course = response.data;
                    setError(false);
                })
                .catch((error) => {
                    setError(true);
                    console.log("ошибка при получении курса");
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }, []);

    return {
        error,
        course: store.course,
        profileId: global_store.store.profile?.id,
    };
};
