import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { CreateCourse as CreateCoursePage } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Create Course",
    description: "VoxMentor create course page",
};

export default function CreatePortfolio({
    params,
}: {
    params: { locale: string };
}) {
    const t = useTranslations("CreateCourse");
    return (
        <>
            <CreateCoursePage
                loc={params.locale}
                title={t("title")}
                add_title={t("add_title")}
                add_description={t("add_description")}
                add_category={t("add_category")}
                add_level={t("add_level")}
                add_image={t("add_image")}
                create={t("create")}
            />
        </>
    );
}
