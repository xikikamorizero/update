"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useEffect, useState } from "react";

type PropsType = {
    publishId: string;
    title?: string;
    year?: number;
    type?: string;
    link: string | null;
};

export const useProject = ({ ...props }: PropsType) => {
    const global_store = useContext(GlobalContext);
    const [title, setTitle] = useState(props.title ? props.title : "");
    const [year, setYear] = useState(props.year ? props.year : 0);
    const [type, setType] = useState(props.type ? props.type : "");
    const [link, setLink] = useState(props.link ? props.link : "");

    const [editModeItem, setEditModeItem] = useState(false);

    function Edit() {
        global_store.store.UpdatePort.editPublications(
            { id: props.publishId },
            { title, year: String(year), type, link }
        )
            .then((response) => {
                global_store.store.updateProfile();
            })
            .catch((error) => {
                console.log("Ошибка Publish", error);
            })
            .finally(() => {});
    }

    function Create() {
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
                console.log("Ошибка Publish", error);
            })
            .finally(() => {});
    }

    function Delete() {
        global_store.store.UpdatePort.deletePublications({
            id: props.publishId,
        })
            .then((response) => {
                global_store.store.updateProfile();
            })
            .catch((error) => {
                console.log("Ошибка Publish", error);
            })
            .finally(() => {});
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
    };
};
