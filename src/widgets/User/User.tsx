"use client";
import style from "./User.module.css";
import { useUser } from "./lib/hook";
import { observer } from "mobx-react-lite";
import { Profile } from "@/entities/Profile/Profile";
import { types } from "@/shared/api";
import { SubUnSub } from "../SubUnSub/SubUnSub";
import { LikeDisLike } from "../LikeDisLike/LikeDisLike";
import { Preloader } from "@/shared/Preloader/Preloader";

type PropsType = {
    userId: string;
    loc: string;

    subscriptions: string;
    no_subscriptions: string;
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

    titleTable: string;
    dateTable: string;
    locationTable: string;
    organizationTable: string;
    numberOfHoursTable: string;
    docsTable: string;

    linkT: string;

    docsT: string;
    add_docsT: string;
    yearT: string;
};

export const User = observer(({ ...props }: PropsType) => {
    const { user, myProfile, isIdPresent, typesPortfolio, loading } = useUser({
        userId: props.userId,
        loc: props.loc,
    });

    return (
        <div className={style.containert}>
            {loading ? (
                <div className={style.preloaderContainer}>
                    <div className={style.preloader}>
                        <Preloader />
                    </div>
                </div>
            ) : (
                <Profile
                    loc={props.loc}
                    user={user}
                    myProf={false}
                    myiD={myProfile?.id}
                    isLiked={isIdPresent(myProfile?.likedUsers, props.userId)}
                    isDisliked={isIdPresent(
                        myProfile?.dislikedUsers,
                        props.userId
                    )}
                    isSubscribe={isIdPresent(
                        myProfile?.subscriptions,
                        props.userId
                    )}
                    subBlock={
                        <SubUnSub
                            isSubscribe={isIdPresent(
                                myProfile?.subscriptions,
                                props.userId
                            )}
                            id={props.userId}
                            subscribe={props.subscribe}
                            unsubscribe={props.unsubscribe}
                        />
                    }
                    likeBlock={
                        <LikeDisLike
                            id={props.userId}
                            likes={user?.likes}
                            dislikes={user?.dislikes}
                            isLiked={isIdPresent(
                                myProfile?.likedUsers,
                                props.userId
                            )}
                            isDisliked={isIdPresent(
                                myProfile?.dislikedUsers,
                                props.userId
                            )}
                        />
                    }
                    category={user?.categories}
                    subscribers={props.subscribers}
                    no_subscribers={props.no_subscribers}
                    portfolio_title={props.portfolio_title}
                    course_title={props.course_title}
                    staj={props.staj}
                    positionT={props.positionT}
                    educationT={props.educationT}
                    traningT={props.traningT}
                    publicationT={props.publicationT}
                    awardT={props.awardT}
                    descriptionT={props.descriptionT}
                    contactsT={props.contactsT}
                    scienceDegreeT={props.scienceDegreeT}
                    portfolio={user?.portfolio}
                    course={user?.course}
                    publication={user?.publications}
                    traning={user?.traning}
                    awards={user?.awards}
                    education={user?.education}
                    typesPortfolio={typesPortfolio}
                    titleTable={props.titleTable}
                    dateTable={props.dateTable}
                    locationTable={props.locationTable}
                    organizationTable={props.organizationTable}
                    numberOfHoursTable={props.numberOfHoursTable}
                    docsTable={props.docsTable}
                    subscriptions={props.subscriptions}
                    no_subscriptions={props.no_subscriptions}

                    loadingProject={false}
                    loadingEditProfile={false}

                    linkT={props.linkT}
                    docsT={props.docsT}
                    yearT={props.yearT}
                    add_docsT={props.add_docsT}
                />
            )}
        </div>
    );
});
