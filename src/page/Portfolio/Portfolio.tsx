import style from "./Portfolio.module.css";
import { Portfolio as PortfolioPage } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

export const Portfolio = ({loc}:{loc:string}) => {
    return (
        <div className={style.container}>
            <WithWrapper>
                <PortfolioPage loc={loc} />
            </WithWrapper>
        </div>
    );
};
