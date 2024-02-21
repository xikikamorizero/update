import style from "./User.module.css";
import { User as UserWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    userId: string;
    loc:string;
};

export const User = ({ userId, loc }: PropsType) => {
    return (
        <div className={style.container}>
            <WithWrapper>
                <UserWidget userId={userId} loc={loc} />
            </WithWrapper>
        </div>
    );
};
