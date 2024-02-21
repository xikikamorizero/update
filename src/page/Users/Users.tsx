import style from "./Users.module.css";
import { Users as UsersWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

export const Users =({loc}:{loc:string}) => {
    return (
        <div className={style.wrapper}>
            <WithWrapper>
                <UsersWidget loc={loc} />
            </WithWrapper>
        </div>
    );
};
