"use client";
import { Preloader } from "@/shared/Preloader/Preloader";
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
        <button
            disabled={data.loading}
            className={style.sub_func}
            onClick={data.SubUnSub}
        >
            {data.loading ? (
                <div className={style.preloaderContainer}>
                    <Preloader />
                </div>
            ) : (
                <p>{props.isSubscribe ? props.unsubscribe : props.subscribe}</p>
            )}
        </button>
    );
};
