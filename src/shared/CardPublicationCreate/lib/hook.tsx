"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useEffect, useState } from "react";
import { notification } from "antd";


export const useProject = () => {
    const global_store = useContext(GlobalContext);
    const [title, setTitle] = useState( "");
    const [year, setYear] = useState(0);
    const [type, setType] = useState("");
    const [link, setLink] = useState("");
    const [loading, setLoading] = useState(false);

    const [docs, setDocs] = useState<any>(null);

    const [api, contextHolder] = notification.useNotification();

    const handleFileChange = (event: any) => {
        setDocs(event.target.files[0]);
    };

    const openNotificationWithIcon = (status: number, description: string) => {
        api["error"]({
            message: status,
            description: description,
        });
    };


    function Create() {
        if (!loading) {
            setLoading(true);
            global_store.store.UpdatePort.createPublications({
                title,
                year,
                type,
                link,
            })
                .then((response) => {
                    global_store.store.updateProfile();
                    setTitle("");
                    setYear(0);
                    setType("");
                    setLink("");
                })
                .catch((error) => {
                    openNotificationWithIcon(
                        error.request.status,
                        "Error creating publication"
                    );
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }


    return {
        title,
        setTitle,
        year,
        setYear,
        type,
        setType,
        link,
        setLink,
        Create,
        contextHolder,
        loading,
        docs,
        handleFileChange,
    };
};
