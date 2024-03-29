import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { Profile as ProfilePage } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Profile",
    description: "VoxMentor user profile",
};

export default function Profile({ params }: { params: { locale: string } }) {
    const t = useTranslations("Profile");
    return (
        <>
            <ProfilePage
                loc={params.locale}
                add_name={t("add_name")}
                add_placeOfWork={t("add_placeOfWork")}
                save={t("save")}
                edit_profile={t("edit_profile")}
                add_scienceDegree={t("add_scienceDegree")}
                add_contacts={t("add_contacts")}
                subscribers={t("subscribers")}
                no_subscribers={t("no_subscribers")}
                portfolio_title={t("portfolio_title")}
                course_title={t("course_title")}
                create_portfolio={t("create_portfolio")}
                create_course={t("create_course")}
            />
        </>
    );
}
