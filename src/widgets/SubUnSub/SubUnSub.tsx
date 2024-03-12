"use client";
import style from "./SubUnSub.module.css";
import { useSubUnSub } from "./lib/hook";

type PropsType = {
    isSubscribe?: boolean;
    id?: string;
    subscribe: string;
    unsubscribe: string;
};

export const SubUnSub = ({ ...props }: PropsType) => {
    const data = useSubUnSub({ isSubscribe: props.isSubscribe, id: props.id });
    return (
        <div className={style.sub_func} onClick={data.SubUnSub}>
            {props.isSubscribe ? props.unsubscribe : props.subscribe}
        </div>
    );
};
