"use client";
import { ReactNode } from "react";
import style from "./BottomNavigation.module.css";
import Link from "next/link";
import { Home2, Teacher, Information, Direct } from "iconsax-react";
import { usePathname } from "next/navigation";

type PropsType = {
    profile?: ReactNode;
    loc:string;
    home:string;
    teacher:string;
    portfolio:string;
    about:string;
};

export const BottomNavigation = ({ ...props }: PropsType) => {
    const pathname = usePathname();
    return (
        <div className={style.container}>
            <Link
                href={`/${props.loc}`}
                className={`${style.itemNav} ${
                    pathname == `/${props.loc}` ? style.itemNavAc : null
                }`}
                draggable={false}
            >
                <Home2 className={style.iconNav} />
                <p className={style.title}>{props.home}</p>
            </Link>
            <Link
                href={`/${props.loc}/users`}
                className={`${style.itemNav} ${
                    pathname == `/${props.loc}/users` ? style.itemNavAc : null
                }`}
                draggable={false}
            >
                <Teacher className={style.iconNav} />
                <p className={style.title}>{props.teacher}</p>
            </Link>
            <div className={style.itemNavProfile}>
                <div className={style.profileContainer}>{props.profile}</div>
            </div>
            <Link
                href={`/${props.loc}/portfolio`}
                className={`${style.itemNav} ${
                    pathname == `/${props.loc}/portfolio` ? style.itemNavAc : null
                }`}
                draggable={false}
            >
                <Direct className={style.iconNav} />
                <p className={style.title}>{props.portfolio}</p>
            </Link>
            <Link
                href={`/${props.loc}/aboutUs`}
                className={`${style.itemNav} ${
                    pathname == `/${props.loc}/aboutUs` ? style.itemNavAc : null
                }`}
                draggable={false}
            >
                <Information className={style.iconNav} />
                <p className={style.title}>{props.about}</p>
            </Link>
        </div>
    );
};
