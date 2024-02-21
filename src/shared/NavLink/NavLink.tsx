"use client";
import { usePathname } from "next/navigation";
import style from "./NavLink.module.css";
import Link from "next/link";

type PropsType={
    href:string;
    text:string;
}

export const NavLink = ({...props}:PropsType) => {
    const pathname = usePathname();
    return (
        <Link
            href={props.href}
            className={`${pathname == props.href ? style.linkAction : null} ${
                style.link
            }`}
            draggable={false}
        >
            {props.text}
        </Link>
    );
};
