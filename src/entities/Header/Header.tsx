import style from "./Header.module.css";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { NavLink } from "@/shared";
import { Profile } from "@/widgets";

export const Header = ({loc}:{loc:string}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.navbar}>
                    <div className={style.linkContainer}>
                        <NavLink href={`/${loc}`} text={"home"} />
                        <NavLink href={`/${loc}/users`} text={"users"} />
                    </div>
                    <div className={style.logo}>
                        <Image
                            className={style.icon_logo}
                            draggable={false}
                            src={logo}
                            alt={"logo"}
                        />
                        <p>VoxMentor</p>
                    </div>
                    <div className={style.linkContainer}>
                        <NavLink href={`/${loc}/portfolio`} text={"portfolio"} />
                        <NavLink href={`/${loc}/aboutUs`} text={"about"} />
                        <div className={style.profileContainer}>
                            <Profile loc={loc} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
