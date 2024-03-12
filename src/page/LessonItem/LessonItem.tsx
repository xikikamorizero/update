import { Lesson } from "@/widgets";
import style from "./LessonItem.module.css";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    lessonId: string;
    loc:string;
    accessdenied:string;
};

export const LessonItem = ({ lessonId, loc, accessdenied }: PropsType) => {
    return (
        <div className={style.container}>
            <WithWrapper>
                <Lesson lessonId={lessonId} loc={loc} accessdenied={accessdenied} />
            </WithWrapper>
        </div>
    );
};
