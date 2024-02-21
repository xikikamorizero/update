import style from "./CreatePortfolio.module.css";
import { CreatePortfolio as CreatePortfolioWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

export const CreatePortfolio = ({loc}:{loc:string}) => {
    return (
        <div className={style.container}>
            <p className={style.title}>Create Portfolio</p>
            <WithWrapper>
                <CreatePortfolioWidget loc={loc} />
            </WithWrapper>
        </div>
    );
};
