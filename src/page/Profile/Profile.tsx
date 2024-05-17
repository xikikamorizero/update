import style from "./Profile.module.css";
import { ProfileInfo } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";
import { useTranslations } from "next-intl";

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

    staj: string;
    add_staj: string;
    positionT: string;
    add_positionT: string;
    create: string;
    control: string;
    educationT: string;
    traningT: string;
    publicationT: string;
    awardT: string;
    descriptionT: string;
    contactsT: string;
    scienceDegreeT: string;

    subscriptions: string;
    no_subscriptions: string;

    adminT:string;
};

export const Profile = ({ ...props }: PropsType) => {
    const t = useTranslations("Table");
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
                    staj={props.staj}
                    add_staj={props.add_staj}
                    positionT={props.positionT}
                    add_positionT={props.add_positionT}
                    create={props.create}
                    control={props.control}
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

                    adminT={props.adminT}
                />
            </WithWrapper>
        </div>
    );
};
