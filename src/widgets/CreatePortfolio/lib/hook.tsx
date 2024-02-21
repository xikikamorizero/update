"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

export const useCreatePortfolio = ({loc}:{loc:string}) => {
    const { store } = useContext(GlobalContext);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [uploadedImages, setUploadedImages] = useState<File | null>(null);
    let router = useRouter();

    function Create() {
        if (!loading) {
            setLoading(true);
            store.portfolio
                .create({
                    title: title,
                    content: data,
                    category,
                    type,
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
        setUploadedImages
    };
};
