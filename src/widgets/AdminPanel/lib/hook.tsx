"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useEffect, useState } from "react";
import { TypePortfolio } from "@/shared/api/types";

export const useAdminPanel = ({ loc }: { loc: string }) => {
    const { store } = useContext(GlobalContext);
    const [loading, setLoading] = useState(false);
    const [re, setRe] = useState(false);
    const [types, setTypes] = useState<TypePortfolio[]>([]);

    function Re() {
        setRe(!re);
    }

    useEffect(() => {
        if (!loading) {
            setLoading(true);
            store.portfolio
                .getPortfolioType()
                .then((response) => {
                    setTypes(response.data);
                })
                .catch((error) => {})
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [re]);

    return {
        loading,
        types,
        Re
    };
};
