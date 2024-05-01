"use client";
import { Context as GlobalContext } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect, useState, useRef } from "react";


export const useSlaiderProject = () => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);

    useEffect(() => {
        if (!store.loading) {
            store.loading = true;
            global_store.store.portfolio
                .getPortfolioList({
                    keyword: store.keyword,
                    category: store.category,
                    type: store.type,
                    page: store.page,
                    limit: store.limit,
                })
                .then((response) => {
                    store.portfolio = response.data.portfolio;
                    store.count = response.data.totalPortfolio;
                    store.page = response.data.page;
                    store.page_count = response.data.pageCount;
                })
                .catch((error) => {
                    console.log("ошибка", error);
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }, []);

    return { portfolio: store.portfolio, loading: store.loading };
};
