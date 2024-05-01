"use client";
import { useState, useEffect } from "react";
import { Context as GlobalContext } from "@/shared/api";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { notification } from "antd";

type Props  = {
    loc:string;
    titleError:string;
    description:string;
}

export const useLogin = ({ ...props }: Props) => {
    const { store } = useContext(GlobalContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [api, contextHolder] = notification.useNotification();
    let router = useRouter();

    const openNotificationWithIcon = (status:number) => {
        api["error"]({
            message: props.titleError,
            description: status==409? props.description: '',
        });
    };

    const Login = () => {
        store.auth
            .login(username, password)
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                store.user
                    .getProfile()
                    .then((response) => {
                        store.profile = response.data;
                        store.isAuth = true;
                        console.log(store.profile);
                        router.push(`/${props.loc}`);
                    })
                    .catch();
            })
            .catch((error) => {
                openNotificationWithIcon(error.request.status)
            });
    };

    useEffect(() => {
        if (store.isAuth) {
            router.push(`/${props.loc}`);
        }
    }, []);

    return {
        router,
        username,
        setUsername,
        password,
        setPassword,
        Login,
        contextHolder,
    };
};
