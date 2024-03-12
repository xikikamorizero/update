import style from "./CreateLesson.module.css";
import { CreateLesson as CreateLessonWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    loc: string;
    title: string;
    add_title: string;
    add_description: string;
    add_lessonNumber: string;
    create: string;
};

export const CreateLesson = ({ ...props }: PropsType) => {
    return (
        <div className={style.container}>
            <p className={style.title}>{props.title}</p>
            <WithWrapper>
                <CreateLessonWidget
                    loc={props.loc}
                    add_title={props.add_title}
                    add_description={props.add_description}
                    add_lessonNumber={props.add_lessonNumber}
                    create={props.create}
                />
            </WithWrapper>
        </div>
    );
};
