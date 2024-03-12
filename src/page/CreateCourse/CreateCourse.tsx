import style from "./CreateCourse.module.css";
import { CreateCourse as CreateCourseWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    loc: string;
    title:string;
    add_title: string;
    add_description: string;
    add_level: string;
    add_category: string;
    add_image: string;
    create: string;
};

export const CreateCourse = ({ ...props }: PropsType) => {
    return (
        <div className={style.container}>
            <p className={style.title}>{props.title}</p>
            <WithWrapper>
                <CreateCourseWidget
                    loc={props.loc}
                    add_title={props.add_title}
                    add_description={props.add_description}
                    add_level={props.add_level}
                    add_category={props.add_category}
                    add_image={props.add_image}
                    create={props.create}
                />
            </WithWrapper>
        </div>
    );
};
