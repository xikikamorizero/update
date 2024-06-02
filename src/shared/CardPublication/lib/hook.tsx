"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useEffect, useState } from "react";
import { notification } from "antd";

type PropsType = {
    publishId: string;
    title?: string;
    year?: number;
    type?: string;
    link: string | null;
    docs: string | null;
};

export const useProject = ({ ...props }: PropsType) => {
    const global_store = useContext(GlobalContext);
    const [title, setTitle] = useState(props.title ? props.title : "");
    const [year, setYear] = useState(props.year ? props.year : 0);
    const [type, setType] = useState(props.type ? props.type : "");
    const [link, setLink] = useState(props.link ? props.link : "");
    const [loading, setLoading] = useState(false);
    const [loadingProf, setLoadingProf] = useState(false);

    const [docs, setDocs] = useState<any>(props.docs ? props.docs : null);

    const [editModeItem, setEditModeItem] = useState(false);

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (status: number, description: string) => {
        api["error"]({
            message: status,
            description: description,
        });
    };

    console.log(props.publishId, title, year, type, link, docs);

    function updateProfile() {
        if (!loadingProf) {
            setLoadingProf(true);
            global_store.store.user
                .getProfile()
                .then((response) => {
                    global_store.store.profile = response.data;
                })
                .catch((error) => {
                    openNotificationWithIcon(
                        error.request.status,
                        "Error updating profile information"
                    );
                })
                .finally(() => {
                    setLoadingProf(false);
                });
        }
    }

    function Edit() {
        if (!loading) {
            setLoading(true);
            global_store.store.UpdatePort.editPublications(
                { id: props.publishId },
                {
                    title: title?.trim() !== "" ? title : "null",
                    year: String(year)?.trim() !== "" ? String(year) : "null",
                    type: type?.trim() !== "" ? type : "null",
                    link: link?.trim() !== "" ? link : "null",
                    docs,
                }
            )
                .then((response) => {
                    // global_store.store.updateProfile();
                    updateProfile();
                    setEditModeItem(false);
                })
                .catch((error) => {
                    openNotificationWithIcon(
                        error.request.status,
                        "Error when changing publication"
                    );
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    function Create() {
        if (!loading) {
            setLoading(true);
            global_store.store.UpdatePort.createPublications({
                title,
                year,
                type,
                link,
                docs,
            })
                .then((response) => {
                    // global_store.store.updateProfile();
                    updateProfile();
                    updateProfile();
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

    function Delete() {
        if (!loading) {
            setLoading(true);
            global_store.store.UpdatePort.deletePublications({
                id: props.publishId,
            })
                .then((response) => {
                    // global_store.store.updateProfile();
                    updateProfile();
                })
                .catch((error) => {
                    openNotificationWithIcon(
                        error.request.status,
                        "Error when deleting publication"
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
        Edit,
        editModeItem,
        setEditModeItem,
        Delete,
        Create,
        contextHolder,
        loading,
        docs,
        setDocs,
        loadingProf,
    };
};
