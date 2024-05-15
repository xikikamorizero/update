"use client";
import { PortfolioType } from "@/shared/api/types";
import style from "./Profile.module.css";
import { CardProject } from "@/shared";

type Props = {
    array?: PortfolioType[];
    loc: string;
    title:string;
};

export const BlockPortfolio = ({ ...props }: Props) => {
    if (props.array && props.array?.length > 0) {
        return (
            <div className={style.publicationsContainer}>
                <div className={style.titlePublication}>
                    {props.title}
                </div>
                <div
                    className={style.projectContainer}
                >
                    {props.array.map((a, i) => (
                        <CardProject
                            href={`/${props.loc}/portfolio/${a.id}`}
                            image={a.image}
                            title={a.title}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};
