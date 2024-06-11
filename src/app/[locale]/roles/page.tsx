import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { Roles as RolesPage } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Roles",
    description: "VoxMentor admin",
};

export default function Roles({ params }: { params: { locale: string } }) {
    const t = useTranslations("Profile");
    return (
        <>
            <RolesPage
                loc={params.locale}
                create={t("create")}
    
            />
        </>
    );
}
