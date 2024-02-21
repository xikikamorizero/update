import style from "./CreateCourse.module.css";
import { CreateCourse as CreateCourseWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

export const CreateCourse = ({loc}:{loc:string}) => {
    return (
        <div className={style.container}>
            <p className={style.title}>CreateCourse</p>
            <WithWrapper>
                <CreateCourseWidget loc={loc} />
            </WithWrapper>
        </div>
    );
};
