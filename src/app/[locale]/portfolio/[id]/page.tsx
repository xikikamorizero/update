import type { Metadata } from "next";
import { PortfolioItem } from "@/page";
import { useTranslations } from "next-intl";

type PropsType = {
    params: {
        id: string;
    };
};

export async function generateMetadata({ params }: PropsType) {
    const portfolio = await fetch(
        `http://localhost:5000/portfolio/${params.id}`
    )
        .then((res) => res.json())
        .catch((error) => {});
    return {
        title: portfolio.title ? portfolio.title : `Portfolio ${params.id}`,
    };
}

export default function Portfolio({ params }: PropsType) {
    const t = useTranslations("Portfolio");
    return (
        <>
            <PortfolioItem
                portfolioId={params.id}
                category={t("category")}
                type={t("type")}
                editType={t("editType")}
                editCategory={t("editCategory")}
                editTitle={t("editTitle")}
                save={t("save")}
                edit={t("edit")}
                delete={t("delete")}
            />
        </>
    );
}
