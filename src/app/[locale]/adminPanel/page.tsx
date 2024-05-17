import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { AdminPanel as AdminPanelPage } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Admin Panel",
    description: "VoxMentor admin panel page",
};

export default function AdminPanel({ params }: { params: { locale: string } }) {
    const t = useTranslations("Admin");
    return (
        <>
            <AdminPanelPage
                loc={params.locale}
                title={t("add_type_title")}
                title_enT={t("add_title_en")}
                title_ruT={t("add_title_ru")}
                title_uzT={t("add_title_uz")}
                descriptionT={t("descriptionT")}
                countT={t("countT")}
            />
        </>
    );
}
