import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { CreatePortfolio as CreatePortfolioPage } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Create Portfolio",
    description: "VoxMentor create portfolio page",
};

export default function CreatePortfolio({
    params,
}: {
    params: { locale: string };
}) {
    const t = useTranslations("CreatePortfolio");
    return (
        <>
            <CreatePortfolioPage
                loc={params.locale}
                title={t("title")}
                add_title={t("add_title")}
                add_category={t("add_category")}
                add_type={t("add_type")}
                create={t("create")}
                selectType={t("selectType")}
                add_docs={t("add_docs")}
            />
        </>
    );
}
