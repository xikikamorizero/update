"use client";
import { Context as GlobalContext } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { notification } from "antd";
import { TypePortfolio } from "@/shared/api/types";

type PropsType = {
    portfolioId: string;
    loc: string;
};

export const usePortfolio = ({ portfolioId, loc }: PropsType) => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);
    let router = useRouter();

    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [types, setTypes] = useState<TypePortfolio[]>([]);
    const [uploadedImages, setUploadedImages] = useState<File | null>(null);
    const [dataEditor, setDataEditor] = useState(
        store.portfolio?.content ? store.portfolio.content : "{}"
    );
    const [loadingType, setLoadingType] = useState(false);

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (status: number, description: string) => {
        api["error"]({
            message: status,
            description: description,
        });
    };

    useEffect(() => {
        if (store.portfolio) {
            setTitle(store.portfolio.title);
            setDataEditor(store.portfolio.content);
            setCategory(store.portfolio.category);
            setType(String(store.portfolio.typeId));
        }
    }, [store.portfolio]);

    function EditPortfolio() {
        if (!store.loading) {
            store.loading = true;
            global_store.store.portfolio
                .edit(
                    { id: portfolioId },
                    {
                        title: title,
                        content: dataEditor,
                        category,
                        typeId: Number(type),
                        image: uploadedImages,
                    }
                )
                .then((response) => {
                    store.portfolio = response.data;
                })
                .catch((error) => {
                    openNotificationWithIcon(
                        error.request.status,
                        "Error when changing portfolio project"
                    );
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }

    function DeletePortfolio() {
        if (!store.loading) {
            store.loading = true;
            global_store.store.portfolio
                .delete({ id: portfolioId })
                .then((response) => {
                    if (response.data.success) {
                        router.push(`/${loc}/profile`);
                    }
                })
                .catch((error) => {
                    openNotificationWithIcon(
                        error.request.status,
                        "Error when deleting portfolio project"
                    );
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }

    useEffect(() => {
        if (store.portfolio?.id !== Number(portfolioId)) {
            store.portfolio = null;
        }
        if (!store.loading) {
            store.loading = true;
            global_store.store.portfolio
                .getPortfolio({ id: portfolioId })
                .then((response) => {
                    store.portfolio = response.data;
                })
                .catch((error) => {
                    openNotificationWithIcon(
                        error.request.status,
                        "Error when receiving portfolio"
                    );
                })
                .finally(() => {
                    store.loading = false;
                });
        }
        if (!loadingType) {
            setLoadingType(true);
            global_store.store.portfolio
                .getPortfolioType()
                .then((response) => {
                    setTypes(response.data);
                })
                .catch((error) => {
                    openNotificationWithIcon(error.request.status, "true");
                })
                .finally(() => {
                    setLoadingType(false);
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
        types,
        loadingType,
        contextHolder,
    };
};
