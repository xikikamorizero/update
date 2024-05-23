"use client";
import { useState, useEffect } from "react";
import { Context as GlobalContext } from "@/shared/api";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { notification } from "antd";

type Props = {
    loc: string;
    titleError: string;
    description: string;
};

export const useRegistration = ({ ...props }: Props) => {
    const { store } = useContext(GlobalContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    let router = useRouter();

    const [loading, setLoading] = useState(false);

    const openNotificationWithIcon = (status: number) => {
        api["error"]({
            message: props.titleError,
            description: status == 409 ? props.description : "",
        });
    };

    const handleCheckboxChange = (event: any) => {
        setIsChecked(event.target.checked);
    };

    const Registration = () => {
        if (!loading) {
            setLoading(true);
            store.auth
                .registration(username, password, isChecked)
                .then((response) => {
                    localStorage.setItem("token", response.data.token);
                    store.isAuth = true;
                    store.user
                        .getProfile()
                        .then((response) => {
                            store.profile = response.data;
                            console.log(store.profile);
                            router.push(`/${props.loc}/profile`);
                        })
                        .catch();
                })
                .catch((error) => {
                    openNotificationWithIcon(error.request.status);
                    setLoading(false);
                });
        }
    };

    // useEffect(() => {
    //     if (store.isAuth) {
    //         router.push(`/${props.loc}`);
    //     }
    // }, []);

    return {
        router,
        username,
        setUsername,
        password,
        setPassword,
        isChecked,
        handleCheckboxChange,
        Registration,
        contextHolder,
        loading,
    };
};
