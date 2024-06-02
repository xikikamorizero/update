import style from "./SlaiderCard.module.css";
import { baseUrl } from "../api/const";
import { Skeleton } from "antd";
import Link from "next/link";

type PropsType = {
    src: string | null;
    title?: string | null;
    subtitle?: string | null;
    loading: boolean;
    href: string;
};

export const SlaiderCard = ({ ...props }: PropsType) => {
    return (
        <Skeleton
            loading={props.loading}
            active
            avatar={{ shape: "square" }}
            style={{
                background: "var(--main_color)",
                width: "100%",
                height: "100%",
            }}
        >
            <Link
                draggable={false}
                href={props.href}
                className={style.container}
            >
                <img
                    draggable={false}
                    className={style.avatar}
                    alt="avatar"
                    src={props.src ? baseUrl + props.src : "/user.png"}
                />
                <p className={style.title}>
                    {props.title ? props.title : "null"}
                </p>
                <p className={style.subtitle}>
                    {props.subtitle ? props.subtitle : "null"}
                </p>
            </Link>
        </Skeleton>
    );
};
