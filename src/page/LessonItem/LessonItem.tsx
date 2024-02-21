import { Lesson } from "@/widgets";
import style from "./LessonItem.module.css";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    lessonId: string;
    loc:string;
};

export const LessonItem = ({ lessonId, loc }: PropsType) => {
    return (
        <div className={style.container}>
            <WithWrapper>
                <Lesson lessonId={lessonId} loc={loc} />
            </WithWrapper>
        </div>
    );
};
