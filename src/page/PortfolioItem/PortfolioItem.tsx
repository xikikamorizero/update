import style from "./PortfolioItem.module.css";
import { PortfolioItem as PortfolioItemWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    portfolioId: string;
    category: string;
    type: string;
    editType: string;
    editCategory: string;
    editTitle: string;
    save: string;
    edit: string;
    delete: string;
};

export const PortfolioItem = ({ ...props }: PropsType) => {
    return (
        <div className={style.container}>
            <WithWrapper>
                <PortfolioItemWidget
                    portfolioId={props.portfolioId}
                    category={props.category}
                    type={props.type}
                    editType={props.editType}
                    editCategory={props.editCategory}
                    editTitle={props.editTitle}
                    save={props.save}
                    edit={props.edit}
                    delete={props.delete}
                />
            </WithWrapper>
        </div>
    );
};
