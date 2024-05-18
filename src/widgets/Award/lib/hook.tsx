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

export const useAward = ({ ...props }: Props) => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);
    let router = useRouter();
    const [editMode, setEditMode] = useState(false);

    const [title, setTitle] = useState(
        store.award?.title ? store.award?.title : ""
    );
    const [type, setType] = useState(
        store.award?.type ? store.award?.type : ""
    );
    const [year, setYear] = useState(store.award?.year ? store.award?.year : 0);
    const [uploadedImages, setUploadedImages] = useState<any | null>(null);
    const [docs, setDocs] = useState<any>(
        store.award?.docs ? store.award?.docs : null
    );

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (status: number, description: string) => {
        api["error"]({
            message: status,
            description: description,
        });
    };

    useEffect(() => {
        if (store.award) {
            setTitle(store.award.title);
            setType(store.award.type);
            setYear(store.award.year);
            setUploadedImages(store.award.image);
        }
    }, [store.award]);

    const handleFileChange = (event: any) => {
        setDocs(event.target.files[0]);
    };

    function Edit() {
        if (!store.loading) {
            store.loading = true;
            global_store.store.UpdatePort.editAward(
                { id: props.id },
                {
                    title: title,
                    type: type,
                    year: String(year),
                    image: uploadedImages,
                    docs: docs,
                }
            )
                .then((response) => {
                    store.award = response.data;
                })
                .catch((error) => {
                    openNotificationWithIcon(
                        error.request.status,
                        "Error when changing reward"
                    );
                    // if (store.award) {
                    //     setTitle(store.award.title);
                    //     setType(store.award.type);
                    //     setYear(store.award.year);
                    //     setUploadedImages(store.award.image);
                    // }
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }

    function Delete() {
        if (!store.loading) {
            store.loading = true;
            global_store.store.UpdatePort.deleteAward({ id: props.id })
                .then((response) => {
                    if (response.data.success) {
                        router.push(`/${props.loc}/profile`);
                    }
                })
                .catch((error) => {
                    openNotificationWithIcon(
                        error.request.status,
                        "Error when deleting reward"
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
            global_store.store.UpdatePort.getAwardItem({
                id: props.id,
            })
                .then((response) => {
                    store.award = response.data;
                })
                .catch((error) => {
                    openNotificationWithIcon(
                        error.request.status,
                        "Error when receiving reward"
                    );
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }, []);

    return {
        award: store.award,
        editMode,
        setEditMode,
        title,
        setTitle,
        type,
        year,
        setYear,
        setType,
        setDocs,
        handleFileChange,
        profile: global_store.store.profile,
        Edit,
        Delete,
        uploadedImages,
        setUploadedImages,
        contextHolder,
        loading: store.loading,
    };
};
