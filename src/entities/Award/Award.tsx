import style from "./Award.module.css";
import { Cup } from "iconsax-react";
import Link from "next/link";

type PropsType = {
    href:string;
    title:string;
    year:number;
}

export const Award = ({...props}:PropsType) => {
    return (
        <Link href={props.href} className={style.container}>
            <Cup className={style.cupIcon} />
            <p className={style.title}>{props.title}</p>
            <p className={style.year}>{props.year}</p>
        </Link>
    );
};
