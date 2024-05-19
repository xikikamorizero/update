import type { Metadata } from "next";
import { Portfolio as PortfolioPage } from "@/page";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
    title: "VoxMentor | Portfolio",
    description: "VoxMentor portfolio page",
};

export default function Portfolio({ params }: { params: { locale: string } }) {
    const t = useTranslations("Portfolio");
    return (
        <>
            <PortfolioPage
                loc={params.locale}
                title={t("title")}
                type={t("type")}
                category={t("category")}
                keyword={t("keyword")}
            />
        </>
    );
}
