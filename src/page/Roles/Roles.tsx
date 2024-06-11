import style from "./Roles.module.css";
import { WithWrapper } from "@/features/hoc/authRedirect";
import { Vanguard } from "@/features/hoc/authVanguard";
import { useTranslations } from "next-intl";
import { Roles as RolesWidget } from "@/widgets/Roles/Roles";

type PropsType = {
    loc: string;
    create: string;
};

export const Roles = ({ ...props }: PropsType) => {
    const t = useTranslations("Main");
    return (
        <div className={style.container}>
            <WithWrapper loc={props.loc}>
                <Vanguard text={t("title")}>
                    <RolesWidget loc={props.loc} create={props.create} />
                </Vanguard>
            </WithWrapper>
        </div>
    );
};
