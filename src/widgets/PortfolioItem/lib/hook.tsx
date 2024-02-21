"use client";
import { Context as GlobalContext } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type PropsType = {
    portfolioId: string;
};

export const usePortfolio = ({ portfolioId }: PropsType) => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);
    let router = useRouter();

    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [uploadedImages, setUploadedImages] = useState<File | null>(null);
    const [dataEditor, setDataEditor] = useState(
        store.portfolio?.content ? store.portfolio.content : "{}"
    );
    useEffect(() => {
        if (store.portfolio) {
            setTitle(store.portfolio.title);
            setDataEditor(store.portfolio.content);
            setCategory(store.portfolio.category);
            setType(store.portfolio.type);
        }
    }, [store.portfolio]);

    function EditPortfolio() {
        global_store.store.portfolio
            .edit(
                { id: portfolioId },
                {
                    title: title,
                    content: dataEditor,
                    category,
                    type,
                    image: uploadedImages,
                }
            )
            .then((response) => {
                store.portfolio = response.data;
            })
            .catch((error) => {
                console.log("ошибка при EditPortfolio");
            })
            .finally(() => {});
    }

    function DeletePortfolio() {
        global_store.store.portfolio
            .delete({ id: portfolioId })
            .then((response) => {
                if (response.data.success) {
                    router.push("/profile");
                }
            })
            .catch((error) => {
                console.log("ошбка при DeletePortfolio");
            })
            .finally(() => {});
    }

    useEffect(() => {
        if (store.portfolio?.id !== Number(portfolioId)) {
            store.portfolio = null;
        }
        if (!store.loading) {
            console.log("A Туту");
            store.loading = true;
            global_store.store.portfolio
                .getPortfolio({ id: portfolioId })
                .then((response) => {
                    store.portfolio = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }, []);

    return {
        portfolio: store.portfolio,
        loading: store.loading,
        profile: global_store.store.profile,
        EditPortfolio,
        DeletePortfolio,
        editMode,
        setEditMode,
        title,
        setTitle,
        category,
        setCategory,
        type,
        setType,
        uploadedImages,
        setUploadedImages,
        dataEditor,
        setDataEditor,
    };
};
