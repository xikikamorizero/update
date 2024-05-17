import style from "./AdminPanel.module.css";
import { AdminPanel as AdminPanelWidgets } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";
import { VanguardAdm } from "@/features/hoc/authVanguardAdm";
import { useTranslations } from "next-intl";

type PropsType = {
    loc: string;
    title: string;
    title_enT: string;
    title_ruT: string;
    title_uzT: string;
    descriptionT: string;
    countT:string;
};

export const AdminPanel = ({ ...props }: PropsType) => {
    const t = useTranslations("Main");
    return (
        <div className={style.container}>
            <p className={style.title}>{props.title}</p>
            <WithWrapper loc={props.loc}>
                <VanguardAdm text={t("titleAdmin")}>
                    <AdminPanelWidgets
                        loc={props.loc}
                        title_enT={props.title_enT}
                        title_ruT={props.title_ruT}
                        title_uzT={props.title_uzT}
                        descriptionT={props.descriptionT}
                        countT={props.countT}
                    />
                </VanguardAdm>
            </WithWrapper>
        </div>
    );
};
