import style from "./CourseItem.module.css";
import { Course as CourseWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    courseId: string;
    loc: string;
    description: string;
    create: string;
    accessdenied: string;
    level: string;
    category: string;
    save:string;
    delete:string;
    edit:string;
};

export const CourseItem = ({ ...props }: PropsType) => {
    return (
        <div className={style.container}>
            <WithWrapper>
                <CourseWidget
                    level={props.level}
                    category={props.category}
                    courseId={props.courseId}
                    loc={props.loc}
                    description={props.description}
                    create={props.create}
                    accessdenied={props.accessdenied}
                    save={props.save}
                    delete={props.delete}
                    edit={props.edit}
                />
            </WithWrapper>
        </div>
    );
};
