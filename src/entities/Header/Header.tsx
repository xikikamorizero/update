import style from "./Header.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { NavLink } from "@/shared";
import { Profile } from "@/widgets";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

export const Header = ({ loc }: { loc: string }) => {
    const t = useTranslations("Navigation");
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.navbar}>
                    <div
                        className={`${style.linkContainer} ${style.linkContainerIndigo}`}
                    >
                        <NavLink href={`/${loc}`} text={t("home")} />
                        <NavLink href={`/${loc}/users`} text={t("teachers")} />
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
                        <NavLink
                            href={`/${loc}/portfolio`}
                            text={t("portfolio")}
                        />
                        <NavLink href={`/${loc}/aboutUs`} text={t("about")} />
                        <div className={style.profileContainer}>
                            <Profile loc={loc} />
                        </div>
                    </div>{" "}
                    <LanguageSwitcher />
                </div>
            </div>
        </div>
    );
};
