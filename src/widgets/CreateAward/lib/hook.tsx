"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

export const useCreateAward = ({loc}:{loc:string}) => {
    const { store } = useContext(GlobalContext);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);
    const [type, setType] = useState("");
    const [uploadedImages, setUploadedImages] = useState<File | null>(null);
    let router = useRouter();

    function Create() {
        if (!loading) {
            setLoading(true);
            store.UpdatePort.createAward({
                    title: title,
                    type: type,
                    year:year,
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
        title,
        setTitle,
        year,
        setYear,
        type,
        setType,
        uploadedImages,
        setUploadedImages
    };
};
