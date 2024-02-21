"use client";
import { Context as GlobalContext } from "@/shared/api";
import { types } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect } from "react";

type PropsType = {
    userId: string;
};

export const useUser = ({ userId }: PropsType) => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);

    function isIdPresent(
        arrayOfObjects:
            | types.Likes[]
            | types.Dislike[]
            | types.Subscribers[]
            | undefined,
        targetId: string
    ) {
        if (arrayOfObjects) {
            return arrayOfObjects.some((obj) => obj.id === Number(targetId));
        } else {
            return false;
        }
    }

    useEffect(() => {
        console.log(userId);
        if (!store.loading) {
            store.loading = true;
            global_store.store.user
                .getUser({ id: userId })
                .then((response) => {
                    store.user = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }, [global_store.store.update_profile]);

    return {
        user: store.user,
        myProfile: global_store.store.profile,
        isIdPresent: isIdPresent,
    };
};
