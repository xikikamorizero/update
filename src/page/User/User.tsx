import style from "./User.module.css";
import { User as UserWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";
import { useTranslations } from "next-intl";

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

    subscriptions: string;
    no_subscriptions: string;
};

export const User = ({ ...props }: PropsType) => {
    const t = useTranslations("Table");
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

                    titleTable={t("titleTable")}
                    dateTable={t("dateTable")}
                    locationTable={t("locationTable")}
                    organizationTable={t("organizationTable")}
                    numberOfHoursTable={t("numberOfHoursTable")}
                    docsTable={t("docsTable")}

                    subscriptions={props.subscriptions}
                    no_subscriptions={props.no_subscriptions}
                />
            </WithWrapper>
        </div>
    );
};
