import style from "./Footer.module.css";
import { BottomNavigation } from "@/shared";
import { useTranslations } from "next-intl";
import { Profile } from "@/widgets";

export const Footer = ({ loc }: {loc:string}) => {
    const t = useTranslations("Navigation");
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
            © 2024, «VoxMentor». Все интересное у нас.
            </div>
            <BottomNavigation
                loc={loc}
                profile={<Profile loc={loc} />}
                home={t("home")}
                teacher={t("teachers")}
                portfolio={t("portfolio")}
                about={t("about")}
            />
        </div>
    );
};
