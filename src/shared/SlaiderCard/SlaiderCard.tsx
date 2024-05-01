import style from "./SlaiderCard.module.css";
import { baseUrl } from "../api/const";
import { Skeleton } from "antd";

type PropsType = {
    src: string | null;
    title?: string | null;
    subtitle?: string | null;
    loading: boolean;
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
            <div className={style.container}>
                <img
                    draggable={false}
                    className={style.avatar}
                    alt="avatar"
                    src={
                        props.src
                            ? baseUrl + props.src
                            : "https://api.dicebear.com/7.x/miniavs/svg?seed=25"
                    }
                />
                <p className={style.title}>{props.title}</p>
                <p className={style.subtitle}>{props.subtitle}</p>
            </div>
        </Skeleton>
    );
};
