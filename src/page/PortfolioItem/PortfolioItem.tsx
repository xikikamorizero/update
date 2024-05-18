import style from "./PortfolioItem.module.css";
import { PortfolioItem as PortfolioItemWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";
import { useTranslations } from "next-intl";

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
    creator: string;
    loc: string;
};

export const PortfolioItem = ({ ...props }: PropsType) => {
    const t = useTranslations("CreatePortfolio");
    return (
        <div className={style.container}>
            <WithWrapper loc={props.loc}>
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
                    creator={props.creator}
                    loc={props.loc}
                    selectType={t("selectType")}
                />
            </WithWrapper>
        </div>
    );
};
