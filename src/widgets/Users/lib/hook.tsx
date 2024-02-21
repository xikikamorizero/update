"use client";
import { Context as GlobalContext } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";

export const useUsers = () => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);

    const pathname = usePathname();
    let path = useSearchParams();
    const current = new URLSearchParams(Array.from(path.entries()));

    function setKeyword(keyword:string){
        store.keyword = keyword
    }
    function setPlaceOfWork(placeOfWork:string){
        store.placeOfWork = placeOfWork
    }
    function setScienceDegreets(scienceDegreets:string){
        store.scienceDegreets = scienceDegreets
    }

    useEffect(() => {
        const keyword = path.get("keyword");
        const placeOfWork = path.get("place_of_work");
        const scienceDegreets = path.get("science_degree");
        if (keyword != null) {
            store.keyword = keyword;
        }
        if (placeOfWork != null) {
            store.placeOfWork = placeOfWork;
        }
        if (scienceDegreets != null) {
            store.scienceDegreets = scienceDegreets;
        }
    }, []);

    useEffect(() => {
        if (store.keyword != "") {
            current.set("keyword", store.keyword);
        }
        else{
            current.delete("keyword");
        }
        if (store.placeOfWork != "") {
            current.set("place_of_work", store.placeOfWork);
        }
        else{
            current.delete("place_of_work");
        }
        if (store.scienceDegreets != "") {
            current.set("science_degree", store.scienceDegreets);
        }
        else{
            current.delete("science_degree");
        }
        const search = current.toString();
        const query = search ? `?${search}` : "";
        window.history.pushState(null, "", `${pathname}${query}`);
    }, [store.keyword, store.placeOfWork, store.scienceDegreets]);

    useEffect(() => {
        console.log(encodeURIComponent(store.keyword));
        if (!store.loading) {
            store.loading = true;
            global_store.store.user
                .getUsers({
                    keyword:store.keyword,
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
    }, [store.page, store.keyword, store.placeOfWork, store.scienceDegreets]);

    return {
        users: store.users,
        keyword: store.keyword,
        setKeyword: setKeyword,
        placeOfWork: store.placeOfWork,
        setPlaceOfWork: setPlaceOfWork,
        scienceDegreets: store.scienceDegreets,
        setScienceDegreets: setScienceDegreets,
        page: store.page,
        pageCount: store.page_count,
        limit: store.limit,
        myId: global_store.store.profile?.id,
    };
};
