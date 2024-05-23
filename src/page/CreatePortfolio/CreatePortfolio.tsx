import style from "./CreatePortfolio.module.css";
import { CreatePortfolio as CreatePortfolioWidget } from "@/widgets";
import { WithWrapper } from "@/features/hoc/authRedirect";
import { Vanguard } from "@/features/hoc/authVanguard";
import { useTranslations } from "next-intl";

type PropsType = {
    loc: string;
    title: string;
    add_title: string;
    add_category: string;
    add_type: string;
    create: string;
    selectType:string;
    add_docs:string;
};

export const CreatePortfolio = ({ ...props }: PropsType) => {
    const t = useTranslations("Main");
    return (
        <div className={style.container}>
            <p className={style.title}>{props.title}</p>
            <WithWrapper loc={props.loc}>
                <Vanguard text={t("title")}>
                    <CreatePortfolioWidget
                        loc={props.loc}
                        add_title={props.add_title}
                        add_category={props.add_category}
                        add_type={props.add_type}
                        create={props.create}
                        selectType={props.selectType}
                        add_docs={props.add_docs}
                    />
                </Vanguard>
            </WithWrapper>
        </div>
    );
};
