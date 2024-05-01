import style from "./CreateLesson.module.css";
import { CreateLesson as CreateLessonWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";
import { Vanguard } from "@/features/hoc/authVanguard";
import { useTranslations } from "next-intl";

type PropsType = {
    loc: string;
    title: string;
    add_title: string;
    add_description: string;
    add_lessonNumber: string;
    create: string;
    titleValid:string;
    descriptionValid:string;
};

export const CreateLesson = ({ ...props }: PropsType) => {
    const t = useTranslations("Main");
    return (
        <div className={style.container}>
            <p className={style.title}>{props.title}</p>
            <WithWrapper loc={props.loc}>
                <Vanguard text={t("title")}>
                    <CreateLessonWidget
                        loc={props.loc}
                        add_title={props.add_title}
                        add_description={props.add_description}
                        add_lessonNumber={props.add_lessonNumber}
                        create={props.create}
                        titleValid={props.titleValid}
                        descriptionValid={props.descriptionValid}
                    />
                </Vanguard>
            </WithWrapper>
        </div>
    );
};
