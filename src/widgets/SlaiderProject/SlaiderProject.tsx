"use client";
import style from "./SlaiderProject.module.css";
import Link from "next/link";
import { useSlaiderProject } from "./lib/hook";
import { Slaider as SlaiderContainer } from "@/entities/Slaider/Slaider";
import { SlaiderCard } from "@/shared";
import { observer } from "mobx-react-lite";

type Props = {
    title: string;
    link: string;
    textLink: string;
};

export const SlaiderProject = observer(({ ...props }: Props) => {
    const data = useSlaiderProject();
    return (
        <div className={style.container}>
            <div className={style.containerTitle}>
                <p className={style.title}>{props.title}</p>
                <Link
                    href={props.link}
                    className={style.link}
                    draggable={false}
                >
                    {props.textLink}
                </Link>
            </div>
            <SlaiderContainer>
                {data.portfolio.map((a, i) => (
                    <SlaiderCard
                        key={i}
                        title={a.title}
                        subtitle={a.category}
                        src={a.image}
                        loading={data.loading}
                    />
                ))}
            </SlaiderContainer>
        </div>
    );
});
