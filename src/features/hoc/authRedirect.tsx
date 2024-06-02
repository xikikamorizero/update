"use client";
import { Context } from "@/shared/api";
import { ReactNode } from "react";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";

type PropsType = {
    children: ReactNode;
    loc: string;
};

export const WithWrapper = observer(({ children, loc }: PropsType) => {
    const { store } = useContext(Context);
    const router = useRouter();
    console.log("HOCA", store.isAuth, localStorage.getItem("token"));
    if (store.isAuth) {
        return children;
    } else if (!store.isAuth && !localStorage.getItem("token")) {
        router.push(`/${loc}/login`);
    }
});
