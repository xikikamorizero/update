"use client";
import style from "./User.module.css";
import { useUser } from "./lib/hook";
import { observer } from "mobx-react-lite";
import { Profile } from "@/entities/Profile/Profile";
import { types } from "@/shared/api";
import { SubUnSub } from "../SubUnSub/SubUnSub";
import { LikeDisLike } from "../LikeDisLike/LikeDisLike";

type PropsType = {
    userId: string;
    loc: string;

    subscribers: string;
    no_subscribers: string;
    portfolio_title: string;
    course_title: string;
    subscribe: string;
    unsubscribe: string;
};

export const User = observer(({ ...props }: PropsType) => {
    const { user, myProfile, isIdPresent } = useUser({ userId: props.userId });
    return (
        <div className={style.containert}>
            <Profile
                loc={props.loc}
                user={user}
                myProf={false}
                myiD={myProfile?.id}
                isLiked={isIdPresent(myProfile?.likedUsers, props.userId)}
                isDisliked={isIdPresent(myProfile?.dislikedUsers, props.userId)}
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
                subscribers={props.subscribers}
                no_subscribers={props.no_subscribers}
                portfolio_title={props.portfolio_title}
                course_title={props.course_title}
                portfolio={user?.postfolio}
                course={user?.course}
            />
        </div>
    );
});
