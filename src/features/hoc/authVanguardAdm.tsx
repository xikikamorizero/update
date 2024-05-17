"use client";
import { Context } from "@/shared/api";
import { ReactNode } from "react";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

type PropsType = {
    children: ReactNode;
    text:string;
};

export const VanguardAdm = observer(({ children, text }: PropsType) => {
    const { store } = useContext(Context);
    if (store.profile?.roles.some((obj) => obj.value == "Admin")) {
        return children;
    } else {
        return (
            <>{text}</>
        );
    }
});
