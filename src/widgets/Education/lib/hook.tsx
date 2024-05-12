"use client";
import { Context as GlobalContext } from "@/shared/api";
import { Context } from "./context";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

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
    const [docs, setDocs] = useState<any>(
        store.education?.docs ? store.education?.docs : null
    );

    useEffect(() => {
        if (store.education) {
            setTitle(store.education.title);
            setDate(store.education.date);
            setUploadedImages(store.education.image);
        }
    }, [store.education]);

    const handleFileChange = (event: any) => {
        setDocs(event.target.files[0]);
    };

    function Edit() {
        global_store.store.UpdatePort.editEducation(
            { id: props.id },
            {
                title: title,
                date: date,
                image: uploadedImages,
                docs: docs,
            }
        )
            .then((response) => {
                store.education = response.data;
            })
            .catch((error) => {
                console.log("ошибка при EditEducation");
            })
            .finally(() => {});
    }

    function Delete() {
        global_store.store.UpdatePort.deleteEducation({ id: props.id })
            .then((response) => {
                if (response.data.success) {
                    router.push(`/${props.loc}/profile`);
                }
            })
            .catch((error) => {
                console.log("ошибка при DeleteAward");
            })
            .finally(() => {});
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
                    console.log("ошибка", error);
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
        setDocs,
        handleFileChange,
        profile: global_store.store.profile,
        Edit,
        Delete,
        uploadedImages,
        setUploadedImages,
    };
};
