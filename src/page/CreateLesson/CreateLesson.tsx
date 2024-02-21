import style from "./CreateLesson.module.css";
import { CreateLesson as CreateLessonWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

export const CreateLesson = ({loc}:{loc:string}) => {
    return (
        <div className={style.container}>
            <p className={style.title}>CreateLesson</p>
            <WithWrapper>
                <CreateLessonWidget loc={loc} />
            </WithWrapper>
        </div>
    );
};
