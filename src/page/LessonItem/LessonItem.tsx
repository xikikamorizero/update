import { Lesson } from "@/widgets";
import style from "./LessonItem.module.css";
import { WithWrapper } from "@/features/hoc/authRedirect";
import { useTranslations } from "next-intl";

type PropsType = {
    lessonId: string;
    loc: string;
    accessdenied: string;
};

export const LessonItem = ({ lessonId, loc, accessdenied }: PropsType) => {
    const t = useTranslations("Course");
    return (
        <div className={style.container}>
            <WithWrapper loc={loc}>
                <Lesson
                    lessonId={lessonId}
                    loc={loc}
                    accessdenied={accessdenied}
                    deleteT={t("delete")}
                    editT={t("edit")}
                    saveT={t("save")}
                />
            </WithWrapper>
        </div>
    );
};
