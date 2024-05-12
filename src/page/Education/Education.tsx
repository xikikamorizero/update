import style from "./Education.module.css";
import { WithWrapper } from "@/features/hoc/authRedirect";
import { Education } from "@/widgets";
import { useTranslations } from "next-intl";

type PropsType = {
    id: string;
    loc: string;
};

export const EducationItem = ({ ...props }: PropsType) => {
     const t = useTranslations("Course");
     const c = useTranslations("CreateAward");
     
    return (
        <div className={style.container}>
            <WithWrapper loc={props.loc}>
                <></>
                <Education
                    id={props.id}
                    loc={props.loc}
                    editTitle={c("add_title")}
                    editDate={c("add_year")}
                    edit={t("edit")}
                    save={t("save")}
                    delete={t("delete")}
                    date={c("year")}
                />
            </WithWrapper>
        </div>
    );
};
