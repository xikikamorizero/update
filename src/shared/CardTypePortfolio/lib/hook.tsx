"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useEffect, useState } from "react";

type PropsType = {
    id: string;
    title_en?: string;
    title_ru?: string;
    title_uz?: string;
    description?: string;
    re: () => void;
};

export const useProject = ({ ...props }: PropsType) => {
    const global_store = useContext(GlobalContext);
    const [titleEn, setTitleEn] = useState(
        props.title_en ? props.title_en : ""
    );
    const [titleRu, setTitleRu] = useState(
        props.title_ru ? props.title_ru : ""
    );
    const [titleUz, setTitleUz] = useState(
        props.title_uz ? props.title_uz : ""
    );

    const [description, setDescription] = useState(
        props.description ? props.description : ""
    );

    const [editModeItem, setEditModeItem] = useState(false);

    const [loading, setLoading] = useState(false);


    function Edit() {
        if (!loading) {
            setLoading(true);
            global_store.store.portfolio
                .editType(
                    { id: props.id },
                    {
                        valueEn: titleEn,
                        valueRu: titleRu,
                        valueUz: titleUz,
                        description: description,
                    }
                )
                .then((response) => {
                    setEditModeItem(false);
                    props.re();
                })
                .catch((error) => {
                    console.log("Ошибка Publish", error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    function Create() {
        if (!loading) {
            setLoading(true);
            global_store.store.portfolio
                .createType({
                    valueEn: titleEn,
                    valueRu: titleRu,
                    valueUz: titleUz,
                    description: description,
                })
                .then((response) => {
                    props.re();
                    setTitleEn("");
                    setTitleRu("");
                    setTitleUz("");
                    setDescription("");
                })
                .catch((error) => {
                    console.log("Ошибка Type create", error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    function Delete() {
        if (!loading) {
            setLoading(true);
            global_store.store.portfolio
                .deleteType({
                    id: props.id,
                })
                .then((response) => {
                    props.re();
                })
                .catch((error) => {
                    console.log("Ошибка Type create", error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    return {
        titleEn,
        setTitleEn,
        titleRu,
        setTitleRu,
        titleUz,
        setTitleUz,
        Edit,
        editModeItem,
        setEditModeItem,
        Delete,
        Create,
        description,
        setDescription,
        loading,
    };
};
