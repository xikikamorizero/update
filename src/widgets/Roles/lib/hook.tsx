"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TypePortfolio } from "@/shared/api/types";
import { notification, UploadFile } from "antd";

export const useRoles = ({ loc }: { loc: string }) => {
    const { store } = useContext(GlobalContext);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState("");
    const [userId, setUserId] = useState("");

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (
        status: number | string,
        type?: string
    ) => {
        api["error"]({
            message: status,
            description: type
                ? "Error getting portfolio project types"
                : "Error when creating a portfolio project",
        });
    };

    function Create() {
        if (!loading) {
            if (value !== "") {
                setLoading(true);
                store.UpdatePort.addRole({
                    value: value,
                    userId: userId,
                })
                    .then((response) => {
                        setLoading(false);
                    })
                    .catch((error) => {
                        openNotificationWithIcon(error.request.status);
                        setLoading(false);
                    });
            } else {
                openNotificationWithIcon("the content field must not be empty");
            }
        }
    }

    return {
        Create: Create,
        loading,
        setLoading,
        value,
        setValue,
        userId,
        setUserId,
        contextHolder
    };
};
