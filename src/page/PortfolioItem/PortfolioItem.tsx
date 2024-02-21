import style from "./PortfolioItem.module.css";
import { PortfolioItem as PortfolioItemWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    portfolioId: string;
};

export const PortfolioItem = ({ portfolioId }: PropsType) => {
    return (
        <div className={style.container}>
            <WithWrapper>
                <PortfolioItemWidget portfolioId={portfolioId} />
            </WithWrapper>
        </div>
    );
};
