import style from "./EducationCard.module.css";
import Link from "next/link";

type Props = {
    id:string;
    title:string;
    year:string;
    href:string;
}

export const EducationCard = ({...props}:Props) => {
    return (
        <Link href={props.href} className={style.container}>
            <p className={style.title}>{props.title}</p>
            <p className={style.year}>{props.year}</p>
        </Link>
    );
};
