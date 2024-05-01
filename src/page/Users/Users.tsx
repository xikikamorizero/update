import style from "./Users.module.css";
import { Users as UsersWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    loc: string;
    title: string;
    type: string;
    category: string;
    keyword: string;
};

export const Users = ({ ...props }: PropsType) => {
    return (
        <div className={style.wrapper}>
            <WithWrapper loc={props.loc}>
                <UsersWidget
                    loc={props.loc}
                    title={props.title}
                    type={props.type}
                    category={props.category}
                    keyword={props.keyword}
                />
            </WithWrapper>
        </div>
    );
};
