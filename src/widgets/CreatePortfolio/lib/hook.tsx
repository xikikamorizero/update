"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TypePortfolio } from "@/shared/api/types";
import { notification, UploadFile } from "antd";

export const useCreatePortfolio = ({ loc }: { loc: string }) => {
    const { store } = useContext(GlobalContext);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [uploadedImages, setUploadedImages] = useState<File | null>(null);
    const [file, setFile] = useState<UploadFile | null>(null);

    const [loadingType, setLoadingType] = useState(false);
    const [types, setTypes] = useState<TypePortfolio[]>([]);
    let router = useRouter();

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (status: number | string, type?: string) => {
        api["error"]({
            message: status,
            description: type
                ? "Error getting portfolio project types"
                : "Error when creating a portfolio project",
        });
    };

    useEffect(() => {
        if (!loadingType) {
            setLoadingType(true);
            store.portfolio
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

    function Create() {
        if (!loading) {
            if(data!==""){
                setLoading(true);
                store.portfolio
                    .create({
                        title: title,
                        content: data,
                        category,
                        typeId: Number(type),
                        image: uploadedImages,
                        docs: file,
                    })
                    .then((response) => {
                        router.push(`/${loc}/profile`);
                    })
                    .catch((error) => {
                        openNotificationWithIcon(error.request.status);
                        setLoading(false);
                    });
            }else{
                openNotificationWithIcon("the content field must not be empty");
            }
        }
    }

    return {
        Create: Create,
        loading,
        setLoading,
        data,
        setData,
        title,
        setTitle,
        category,
        setCategory,
        type,
        setType,
        uploadedImages,
        setUploadedImages,
        types,
        loadingType,
        contextHolder,
        file,
        setFile,
    };
};
