"use client";
import style from "./Slaider.module.css";
import Link from "next/link";
import { useSlaiderUsers } from "./lib/hook";
import { Slaider as SlaiderContainer } from "@/entities/Slaider/Slaider";
import { SlaiderCard } from "@/shared";
import { observer } from "mobx-react-lite";

type Props = {
    title: string;
    link: string;
    textLink: string;
    loc:string;
};

export const Slaider = observer(({ ...props }: Props) => {
    const data = useSlaiderUsers();
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
                {data.users.map((a, i) => (
                    <SlaiderCard
                        key={i}
                        title={a.name}
                        subtitle={a.science_degree}
                        src={a.avatar}
                        loading={data.loading}
                        href={`/${props.loc}/users/${a.id}`}
                    />
                ))}
            </SlaiderContainer>
        </div>
    );
});
