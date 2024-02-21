"use client";
import { Context as GlobalContext } from "@/shared/api";
import { Context } from "./context";
import { useContext } from "react";

type PropsType = {
    isLiked?: boolean;
    isDisliked?: boolean;
    id?: string;
    disabled?: boolean;
};

export const useLikeDisLike = ({ ...props }: PropsType) => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);

    function Like() {
        if (!store.loading && !props.disabled) {
            store.loading = true;
            if (props.id) {
                if (!props.isLiked) {
                    global_store.store.user
                        .like({ id: props.id })
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
                        .unlike({ id: props.id })
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

    function DisLike() {
        if (!store.loading && !props.disabled) {
            store.loading = true;
            if (props.id) {
                if (!props.isDisliked) {
                    global_store.store.user
                        .dislike({ id: props.id })
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
                        .undislike({ id: props.id })
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
        Like: Like,
        DisLike: DisLike,
    };
};
