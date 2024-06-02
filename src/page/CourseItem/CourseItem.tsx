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

    lessonT: string;
    addTitle: string;
    addDescription: string;
    addLevel: string;
    addCategory: string;
};

export const CourseItem = ({ ...props }: PropsType) => {
    return (
        <div className={style.container}>
          <WithWrapper loc={props.loc}>
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

                    lessonT={props.lessonT}
                    addTitle={props.addTitle}
                    addDescription={props.addDescription}
                    addLevel={props.addLevel}
                    addCategory={props.addCategory}
                />
            </WithWrapper>
        </div>
    );
};
