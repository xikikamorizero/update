import style from "./CardProject.module.css";
import { baseUrl } from "../api/const";
import Link from "next/link";

type PropsType = {
    image?: string | null;
    title?: string;
    href: string;
};

export const CardProject = ({ ...props }: PropsType) => {
    return (
        <Link href={props.href} className={style.container}>
            <img
                alt={"project img"}
                src={
                    props.image
                        ? baseUrl + props.image
                        : "/noposter.jpg"
                }
            />
            <p>{props.title}</p>
        </Link>
    );
};
