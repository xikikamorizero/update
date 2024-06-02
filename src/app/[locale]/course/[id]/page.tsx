import { CourseItem as CourseItemPage } from "@/page";
import { useTranslations } from "next-intl";
import axios from "axios";

type PropsType = {
    params: {
        id: string;
        locale: string;
    };
};

export async function generateMetadata({ params }: PropsType) {
    try {
        const loginResponse = await axios.post(
            "http://localhost:5000/auth/login",
            {
                email: "kogay@mail.ru",
                password: "kogay8066",
            }
        );

        const courseResponse = await axios.get(
            `http://localhost:5000/courses/${params.id}`,
            {
                headers: {
                    Authorization: `Bearer ${loginResponse.data.token}`,
                },
            }
        );

        return {
            title: courseResponse.data.title,
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            title: `Course ${params.id}`,
        };
    }
}

export default function CourseItem({ params }: PropsType) {
    const t = useTranslations("Course");
    return (
        <>
            <CourseItemPage
                courseId={params.id}
                loc={params.locale}
                level={t("level")}
                category={t("category")}
                description={t("description")}
                create={t("create")}
                accessdenied={t("accessdenied")}
                delete={t("delete")}
                edit={t("edit")}
                save={t("save")}

                lessonT={t("lessonT")}
                addTitle={t("addTitle")}
                addDescription={t("addDescription")}
                addLevel={t("addLevel")}
                addCategory={t("addCategory")}
            />
        </>
    );
}
