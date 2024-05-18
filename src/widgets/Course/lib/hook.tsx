"use client";
import { Context as GlobalContext } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { notification } from "antd";

export const useCourse = ({
    courseId,
    loc,
}: {
    courseId: string;
    loc: string;
}) => {
    let router = useRouter();
    let path = useSearchParams();
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [level, setLevel] = useState("");
    const [category, setCategory] = useState("");

    const [error, setError] = useState(false);

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (status: number, description: string) => {
        api["error"]({
            message: status,
            description: description,
        });
    };

    useEffect(() => {
        if (store.course) {
            setTitle(store.course.title);
            setDescription(store.course.description);
            setLevel(store.course.level);
            setCategory(store.course.category);
        }
    }, [store.course]);

    function EditCourse() {
        if (!store.loading) {
            store.loading = true;
            global_store.store.course
                .edit(
                    { id: courseId },
                    {
                        title: title,
                        description: description,
                        level: level,
                        category: category,
                        image: null,
                    }
                )
                .then((response) => {
                    store.course = response.data;
                })
                .catch((error) => {
                    openNotificationWithIcon(
                        error.request.status,
                        "Error when changing course"
                    );
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }

    function DeleteCourse() {
        if (!store.loading) {
            store.loading = true;
            global_store.store.course
                .delete({ id: courseId })
                .then((response) => {
                    if (response.data.success) {
                        router.push(`/${loc}/profile`);
                    }
                })
                .catch((error) => {
                    openNotificationWithIcon(
                        error.request.status,
                        "Error when delete course"
                    );
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }

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
                    if (error.request.status == 403) {
                        setError(true);
                    }
                    openNotificationWithIcon(
                        error.request.status,
                        "Error receiving course"
                    );
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }, []);

    return {
        error,
        editMode,
        setEditMode,
        title,
        setTitle,
        description,
        setDescription,
        level,
        setLevel,
        category,
        setCategory,
        course: store.course,
        profileId: global_store.store.profile?.id,
        EditCourse,
        DeleteCourse,
        contextHolder,
        loading: store.loading,
    };
};
