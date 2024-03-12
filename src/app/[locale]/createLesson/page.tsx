import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { CreateLesson as CreateLessonPage } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Create Lesson",
    description: "VoxMentor create lesson page",
};
type PropsType = {
    loc: string;
    title: string;
    add_title: string;
    add_description: string;
    add_lessonNumber: string;
    create: string;
};
export default function CreateLesson({
    params,
}: {
    params: { locale: string };
}) {
    const t = useTranslations("CreateLesson");
    return (
        <>
            <CreateLessonPage
                loc={params.locale}
                title={t("title")}
                add_title={t("add_title")}
                add_description={t("add_description")}
                add_lessonNumber={t("add_lessonNumber")}
                create={t("create")}
            />
        </>
    );
}
