import style from "./CreatePortfolio.module.css";
import { CreatePortfolio as CreatePortfolioWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    loc: string;
    title: string;
    add_title: string;
    add_category: string;
    add_type: string;
    create: string;
};

export const CreatePortfolio = ({ ...props }: PropsType) => {
    return (
        <div className={style.container}>
            <p className={style.title}>{props.title}</p>
            <WithWrapper>
                <CreatePortfolioWidget
                    loc={props.loc}
                    add_title={props.add_title}
                    add_category={props.add_category}
                    add_type={props.add_type}
                    create={props.create}
                />
            </WithWrapper>
        </div>
    );
};
