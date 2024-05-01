import style from "./Profile.module.css";
import { ProfileInfo } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    loc: string;
    add_name: string;
    add_placeOfWork: string;
    save: string;
    edit_profile: string;
    add_scienceDegree: string;
    add_contacts: string;
    add_description: string;
    subscribers: string;
    no_subscribers: string;
    portfolio_title: string;
    course_title: string;
    create_portfolio: string;
    create_course: string;
    out: string;
};

export const Profile = ({ ...props }: PropsType) => {
    return (
        <div className={style.container}>
            <WithWrapper loc={props.loc}>
                <ProfileInfo
                    loc={props.loc}
                    add_name={props.add_name}
                    add_placeOfWork={props.add_placeOfWork}
                    save={props.save}
                    edit_profile={props.edit_profile}
                    add_scienceDegree={props.add_scienceDegree}
                    add_contacts={props.add_contacts}
                    add_description={props.add_description}
                    subscribers={props.subscribers}
                    no_subscribers={props.no_subscribers}
                    portfolio_title={props.portfolio_title}
                    course_title={props.course_title}
                    create_portfolio={props.create_portfolio}
                    create_course={props.create_course}
                    out={props.out}
                />
            </WithWrapper>
        </div>
    );
};
