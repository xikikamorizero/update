import style from "./Card.module.css";
import { Card as CardAnt, Skeleton } from "antd";
import { Profile } from "iconsax-react";
import { baseUrl } from "../api/const";

const { Meta } = CardAnt;

type PropsType = {
    src: string | null;
    title?: string | null;
    subtitle?: string | null;
    loading: boolean;
};

export const Card = ({ ...props }: PropsType) => {
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
            <CardAnt
                hoverable
                className={style.cardContainer}
                cover={
                    <img
                        draggable={false}
                        className={style.avatar}
                        alt="avatar"
                        src={
                            props.src
                                ? baseUrl + props.src
                                : "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        }
                    />
                }
            >
                <div className={style.titleContainer}>
                    <Meta
                        style={{ margin: "0", padding: "0" }}
                        title={
                            <p className={style.title}>
                                {props.title ? props.title : "undefined"}
                            </p>
                        }
                        description={
                            props.subtitle ? (
                                <p className={style.subtitle}>
                                    {props.subtitle ? props.subtitle : "dsdsds"}
                                </p>
                            ) : null
                        }
                    />
                </div>
            </CardAnt>
        </Skeleton>
    );
};
