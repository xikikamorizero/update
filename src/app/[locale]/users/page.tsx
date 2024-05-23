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
                scienceDegree={t("scienceDegree")}
                keyword={t("keyword")}
                awardT={t("awardT")}
                publicationT={t("publicationT")}
                stajT={t("stajT")}
                projectT={t("projectT")}
                courseT={t("courseT")}
                categoryT={t("categoryT")}
                from={t("from")}
                to={t("to")}
                likesT={t("likesT")}
                dislikesT={t("dislikesT")}
                createdAtT={t("createdAtT")}
            />
        </>
    );
}
