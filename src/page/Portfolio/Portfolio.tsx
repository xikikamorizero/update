import style from "./Portfolio.module.css";
import { Portfolio as PortfolioPage } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    loc: string;
    title: string;
    type: string;
    category: string;
    keyword: string;
};

export const Portfolio = ({ ...props }: PropsType) => {
    return (
        <div className={style.container}>
            {/* <WithWrapper loc={props.loc}> */}
                <PortfolioPage
                    loc={props.loc}
                    title={props.title}
                    type={props.type}
                    category={props.category}
                    keyword={props.keyword}
                />
            {/* </WithWrapper> */}
        </div>
    );
};
