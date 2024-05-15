"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TypePortfolio } from "@/shared/api/types";

export const useCreatePortfolio = ({ loc }: { loc: string }) => {
    const { store } = useContext(GlobalContext);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState('');
    const [uploadedImages, setUploadedImages] = useState<File | null>(null);

    const [loadingType, setLoadingType] = useState(false);
    const [types, setTypes] = useState<TypePortfolio[]>([]);
    let router = useRouter();

    useEffect(() => {
        if (!loadingType) {
            setLoadingType(true);
            store.portfolio
                .getPortfolioType()
                .then((response) => {
                    setTypes(response.data);
                })
                .catch(() => {})
                .finally(() => {
                    setLoadingType(false);
                });
        }
    }, []);

    function Create() {
        if (!loading) {
            setLoading(true);
            store.portfolio
                .create({
                    title: title,
                    content: data,
                    category,
                    typeId: Number(type),
                    image: uploadedImages,
                })
                .then((response) => {
                    router.push(`/${loc}/profile`);
                })
                .catch((error) => {
                    console.log(error);
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
    };
};
