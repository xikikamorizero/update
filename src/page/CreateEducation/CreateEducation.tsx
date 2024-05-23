import style from "./CreateEducation.module.css";
import { CreateEducation as CreateEducationWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";
import { Vanguard } from "@/features/hoc/authVanguard";
import { useTranslations } from "next-intl";

type PropsType = {
    loc: string;
};

export const CreateEducation = ({ ...props }: PropsType) => {
    const t = useTranslations("Main");
    const c = useTranslations("CreatePublication");
    const k = useTranslations("CreateAward");
    return (
        <div className={style.container}>
            <p className={style.title}>{c("title")}</p>
            <WithWrapper loc={props.loc}>
                <Vanguard text={t("title")}>
                    <CreateEducationWidget
                        loc={props.loc}
                        add_title={c("add_title")}
                        add_year={c("add_year")}
                        create={c("create")}
                        add_docs={k("add_docs")}
                    />
                </Vanguard>
            </WithWrapper>
        </div>
    );
};
