"use client";
import { Context } from "@/shared/api";
import { ReactNode } from "react";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";

type PropsType = {
    children: ReactNode;
};

export const WithWrapper = observer(({ children }: PropsType) => {
    const { store } = useContext(Context);
    const router = useRouter();
    if (store.isAuth) {
        return children;
    } else if (!store.isAuth && !localStorage.getItem("token")) {
        router.push("/en/login");
    }
});
