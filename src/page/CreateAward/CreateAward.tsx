import style from "./CreateAward.module.css";
import { CreateAward as CreateAwardWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";
import { Vanguard } from "@/features/hoc/authVanguard";
import { useTranslations } from "next-intl";

type PropsType = {
    loc: string;
};

export const CreateAward = ({ ...props }: PropsType) => {
    const t = useTranslations("Main");
    const c = useTranslations("CreateAward");
    return (
        <div className={style.container}>
            <p className={style.title}>{c("title")}</p>
            <WithWrapper loc={props.loc}>
                <Vanguard text={t("title")}>
                    <CreateAwardWidget
                        loc={props.loc}
                        add_title={c("add_title")}
                        add_type={c("add_type")}
                        add_year={c("add_year")}
                        create={c("create")}
                        add_docs={c("add_docs")}
                    />
                </Vanguard>
            </WithWrapper>
        </div>
    );
};
