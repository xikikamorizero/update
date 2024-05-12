import style from "./User.module.css";
import { User as UserWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    userId: string;
    loc: string;

    subscribers: string;
    no_subscribers: string;
    portfolio_title: string;
    course_title: string;
    subscribe: string;
    unsubscribe: string;

    staj: string;
    positionT: string;
    educationT: string;
    traningT: string;
    publicationT: string;
    awardT: string;
    descriptionT: string;
    contactsT: string;
    scienceDegreeT: string;
};

export const User = ({ ...props }: PropsType) => {
    return (
        <div className={style.container}>
            <WithWrapper loc={props.loc}>
                <UserWidget
                    userId={props.userId}
                    loc={props.loc}
                    subscribers={props.subscribers}
                    no_subscribers={props.no_subscribers}
                    portfolio_title={props.portfolio_title}
                    course_title={props.course_title}
                    subscribe={props.subscribe}
                    unsubscribe={props.unsubscribe}
                    staj={props.staj}
                    positionT={props.positionT}
                    educationT={props.educationT}
                    traningT={props.traningT}
                    publicationT={props.publicationT}
                    awardT={props.awardT}
                    descriptionT={props.descriptionT}
                    contactsT={props.contactsT}
                    scienceDegreeT={props.scienceDegreeT}
                />
            </WithWrapper>
        </div>
    );
};
