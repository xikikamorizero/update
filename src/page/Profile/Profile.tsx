import style from "./Profile.module.css";
import { ProfileInfo } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

export const Profile = ({loc}:{loc:string}) => {
    return (
        <div className={style.container}>
            <WithWrapper>
                <ProfileInfo loc={loc} />
            </WithWrapper>
        </div>
    );
};
