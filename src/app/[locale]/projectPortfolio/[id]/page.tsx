import type { Metadata } from "next";
import { PortfolioItem } from "@/page";
import { useTranslations } from "next-intl";

type PropsType = {
    params: {
        id: string;
        locale: string;
    };
};

export async function generateMetadata({
    params,
}: PropsType): Promise<Metadata> {
    try {
        const response = await fetch(
            `http://localhost:5000/portfolio/${params.id}`
        );
        const data = await response.json();
        return {
            title: data.title,
        };
    } catch (error) {
        console.error(
            `Error fetching portfolio data for ID ${params.id}:`,
            error
        );
        return {
            title: `Portfolio ${params.id}`,
        };
    }
}

export default function Portfolio({ params }: PropsType) {
    const t = useTranslations("Portfolio");
    return (
        <>
            <PortfolioItem
                portfolioId={params.id}
                category={t("category")}
                type={t("typeT")}
                editType={t("editType")}
                editCategory={t("editCategory")}
                editTitle={t("editTitle")}
                save={t("save")}
                edit={t("edit")}
                delete={t("delete")}
                creator={t("creator")}
                loc={params.locale}
            />
        </>
    );
}
