import { Award } from "@/widgets";
import style from "./Award.module.css";
import { WithWrapper } from "@/features/hoc/authRedirect";
import { useTranslations } from "next-intl";

type PropsType = {
    id: string;
    loc: string;
};

export const AwardItem = ({ ...props }: PropsType) => {
     const t = useTranslations("Course");
     const c = useTranslations("CreateAward");
     
    return (
        <div className={style.container}>
            <WithWrapper loc={props.loc}>
                <Award
                    id={props.id}
                    loc={props.loc}
                    editTitle={c("add_title")}
                    editType={c("add_type")}
                    editYear={c("add_year")}
                    edit={t("edit")}
                    save={t("save")}
                    delete={t("delete")}
                    year={c("year")}
                    type={c("type")}
                    linkT={c("link_docs")}
                    add_docsT={c("add_docs")}
                />
            </WithWrapper>
        </div>
    );
};
