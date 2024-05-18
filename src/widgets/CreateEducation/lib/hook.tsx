"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { notification } from "antd";

export const useCreateEducation = ({ loc }: { loc: string }) => {
    const { store } = useContext(GlobalContext);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [uploadedImages, setUploadedImages] = useState<File | null>(null);
    let router = useRouter();

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (status: number) => {
        api["error"]({
            message: status,
            description: "Error creating education",
        });
    };

    function Create() {
        if (!loading) {
            setLoading(true);
            store.UpdatePort.createEducation({
                title: title,
                date: date,
                image: uploadedImages,
            })
                .then((response) => {
                    router.push(`/${loc}/profile`);
                })
                .catch((error) => {
                    openNotificationWithIcon(error.request.status);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    return {
        Create: Create,
        loading,
        setLoading,
        title,
        setTitle,
        date,
        setDate,
        uploadedImages,
        setUploadedImages,
        contextHolder,
    };
};
