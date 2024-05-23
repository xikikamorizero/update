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

export const WithWrapperIsAuth = observer(({ children, loc }: PropsType) => {
    const { store } = useContext(Context);
    const router = useRouter();

    console.log("HOCL", store.isAuth , localStorage.getItem("token"));

    if (localStorage.getItem("token")) {
        router.push(`/${loc}/`);
    } else {
        return children;
    }
});
