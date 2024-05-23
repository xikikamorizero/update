"use client";
import { Context as GlobalContext } from "@/shared/api";
import { Context } from "./context";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { notification } from "antd";

type Props = {
    id: string;
    loc: string;
};

export const useEducation = ({ ...props }: Props) => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);
    let router = useRouter();
    const [editMode, setEditMode] = useState(false);

    const [title, setTitle] = useState(
        store.education?.title ? store.education?.title : ""
    );
    const [date, setDate] = useState(
        store.education?.date ? store.education?.date : ""
    );

    const [uploadedImages, setUploadedImages] = useState<any | null>(null);

    const [api, contextHolder] = notification.useNotification();
    const [file, setFile] = useState<any | null>(null);

    const openNotificationWithIcon = (status: number, description: string) => {
        api["error"]({
            message: status,
            description: description,
        });
    };

    useEffect(() => {
        if (store.education) {
            setTitle(store.education.title);
            setDate(store.education.date);
            setUploadedImages(store.education.image);
            setFile(store.education.docs);
        }
    }, [store.education]);

    function Edit() {
        if (!store.loading) {
            store.loading = true;
            global_store.store.UpdatePort.editEducation(
                { id: props.id },
                {
                    title: title,
                    date: date,
                    image: uploadedImages,
                    docs: file,
                }
            )
                .then((response) => {
                    store.education = response.data;
                })
                .catch((error) => {
                    openNotificationWithIcon(
                        error.request.status,
                        "Error when changing education"
                    );
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }

    function Delete() {
        if (!store.loading) {
            store.loading = true;
            global_store.store.UpdatePort.deleteEducation({ id: props.id })
                .then((response) => {
                    if (response.data.success) {
                        router.push(`/${props.loc}/profile`);
                    }
                })
                .catch((error) => {
                    openNotificationWithIcon(
                        error.request.status,
                        "Error when deleting education"
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
            global_store.store.UpdatePort.getEducationItem({
                id: props.id,
            })
                .then((response) => {
                    store.education = response.data;
                })
                .catch((error) => {
                    openNotificationWithIcon(
                        error.request.status,
                        "Error while receiving education"
                    );
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }, []);

    return {
        education: store.education,
        editMode,
        setEditMode,
        title,
        setTitle,
        date,
        setDate,
        profile: global_store.store.profile,
        Edit,
        Delete,
        uploadedImages,
        setUploadedImages,
        contextHolder,
        loading: store.loading,
        file,
        setFile,
    };
};
