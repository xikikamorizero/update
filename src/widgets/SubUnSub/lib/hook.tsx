"use client";
import { Context as GlobalContext } from "@/shared/api";
import { Context } from "./context";
import { useContext } from "react";

type PropsType = {
    isSubscribe?: boolean;
    id?: string;
};

export const useSubUnSub = ({ isSubscribe, id }: PropsType) => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);

    function SubUnSub() {
        if (!store.loading) {
            store.loading = true;
            if (id) {
                if (!isSubscribe) {
                    global_store.store.user
                        .subscribe({ id })
                        .then((response) => {
                            if (response.data.success) {
                                global_store.store.updateProfile();
                            }
                        })
                        .catch((error) => {
                            console.log("Subcribe error");
                        })
                        .finally(() => {
                            store.loading = false;
                        });
                } else {
                    global_store.store.user
                        .unsubscribe({ id })
                        .then((response) => {
                            if (response.data.success) {
                                global_store.store.updateProfile();
                            }
                        })
                        .catch((error) => {
                            console.log("Subcribe error");
                        })
                        .finally(() => {
                            store.loading = false;
                        });
                }
            }
        }
    }

    return {
        loading: store.loading,
        SubUnSub: SubUnSub,
    };
};
