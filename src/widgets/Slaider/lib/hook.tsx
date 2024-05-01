"use client";
import { Context as GlobalContext } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect, useState, useRef } from "react";

type PropsType = {
    portfolioId: string;
};

export const useSlaiderUsers = () => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);

    useEffect(() => {
        if (!store.loading) {
            store.loading = true;
            global_store.store.user
                .getUsers({
                    keyword: store.keyword,
                    place_of_work: store.placeOfWork,
                    science_degree: store.scienceDegreets,
                    page: store.page,
                    limit: store.limit,
                })
                .then((response) => {
                    store.users = response.data.users;
                    store.count = response.data.totalUsers;
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

    return {users:store.users, loading:store.loading};
};
