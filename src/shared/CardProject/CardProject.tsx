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
                        : "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
                }
            />
            <p>{props.title}</p>
        </Link>
    );
};
