import style from "./Users.module.css";
import { Users as UsersWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    loc: string;
    title: string;
    type: string;
    scienceDegree: string;
    keyword: string;

    awardT: string;
    publicationT: string;
    stajT: string;
    projectT: string;
    courseT: string;
    categoryT: string;
    from: string;
    to: string;
    likesT: string;
    dislikesT: string;
    createdAtT:string;
};

export const Users = ({ ...props }: PropsType) => {
    return (
        <div className={style.wrapper}>
            <WithWrapper loc={props.loc}>
                <UsersWidget
                    loc={props.loc}
                    title={props.title}
                    type={props.type}
                    scienceDegree={props.scienceDegree}
                    keyword={props.keyword}
                    awardT={props.awardT}
                    publicationT={props.publicationT}
                    stajT={props.stajT}
                    projectT={props.projectT}
                    courseT={props.courseT}
                    categoryT={props.categoryT}
                    from={props.from}
                    to={props.to}
                    likesT={props.likesT}
                    dislikesT={props.dislikesT}
                    createdAtT={props.createdAtT}
                />
            </WithWrapper>
        </div>
    );
};
