"use client";
import { Context as GlobalContext } from "@/shared/api";
import { types } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

type PropsType = {
    userId: string;
    loc: string;
};

export const useUser = ({ userId, loc }: PropsType) => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);
    let router = useRouter();

    function isIdPresent(
        arrayOfObjects:
            | types.Likes[]
            | types.Dislike[]
            | types.Subscribers[]
            | undefined,
        targetId: string
    ) {
        if (arrayOfObjects) {
            return arrayOfObjects.some((obj) => obj.id === targetId);
        } else {
            return false;
        }
    }

    useEffect(() => {
        if (!store.loading) {
            if (userId != global_store.store.profile?.id) {
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
            } else {
                router.push(`/${loc}/profile`);
            }
        }
    }, []);

    useEffect(() => {
        global_store.store.user
            .getUser({ id: userId })
            .then((response) => {
                store.user = response.data;
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {});
    }, [global_store.store.update_profile]);

    return {
        user: store.user,
        myProfile: global_store.store.profile,
        isIdPresent: isIdPresent,
        typesPortfolio: global_store.store.typePortfolio,
        loading: store.loading,
    };
};
