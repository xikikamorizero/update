"use client";
import { Context as GlobalContext } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";

export const usePortfolio = () => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);

    const pathname = usePathname();
    let path = useSearchParams();
    const current = new URLSearchParams(Array.from(path.entries()));

    function setKeyword(value: string) {
        store.keyword = value;
    }
    function setCategory(value: string) {
        store.category = value;
    }
    function setType(value: string) {
        store.type = value;
    }
    useEffect(() => {
        const keyword = path.get("keyword");
        const category = path.get("category");
        const type = path.get("type");
        if (keyword != null) {
            store.keyword = keyword;
        }
        if (category != null) {
            store.category = category;
        }
        if (type != null) {
            store.type = type;
        }
    }, []);

    useEffect(() => {
        if (store.keyword != "") {
            current.set("keyword", store.keyword);
        } else {
            current.delete("keyword");
        }
        if (store.category != "") {
            current.set("category", store.category);
        } else {
            current.delete("category");
        }
        if (store.type != "") {
            current.set("type", store.type);
        } else {
            current.delete("type");
        }
        const search = current.toString();
        const query = search ? `?${search}` : "";
        window.history.pushState(null, "", `${pathname}${query}`);
    }, [store.keyword, store.category, store.type]);

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
    }, [store.page, store.keyword, store.category, store.type]);

    return {
        portfolio: store.portfolio,
        keyword: store.keyword,
        setKeyword,
        category: store.category,
        setCategory,
        type: store.type,
        setType,
        page: store.page,
        pageCount: store.page_count,
        limit: store.limit,
    };
};
