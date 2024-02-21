import style from "./CourseItem.module.css";
import { Course as CourseWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    courseId: string;
    loc:string;
};

export const CourseItem = ({ courseId,loc }: PropsType) => {
    return (
        <div className={style.container}>
            <WithWrapper>
                <CourseWidget courseId={courseId} loc={loc} />
            </WithWrapper>
        </div>
    );
};
