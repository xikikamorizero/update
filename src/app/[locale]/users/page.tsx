import type { Metadata } from "next";
import { Users as UsersPage } from "@/page";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
    title: "VoxMentor | Teachers",
    description: "VoxMentor teachers page",
};

export default function Users({ params }: { params: { locale: string } }) {
    const t = useTranslations("Teachers");
    return (
        <>
            <UsersPage
                loc={params.locale}
                title={t("title")}
                type={t("type")}
                category={t("category")}
                keyword={t("keyword")}
            />
        </>
    );
}
