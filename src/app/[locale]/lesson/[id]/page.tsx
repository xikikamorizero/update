import { LessonItem } from "@/page";
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
        const loginResponse = await axios.post("http://localhost:5000/auth/login", {
            email: "kogay@mail.ru",
            password: "kogay8066",
        });
        
        const courseResponse = await axios.get(`http://localhost:5000/lessons/${params.id}`, {
            headers: {
                Authorization: `Bearer ${loginResponse.data.token}`,
            },
        });

        return {
            title: courseResponse.data.title,
        };
    } catch (error) {
        return {
            title: `Lesson ${params.id}`,
        };
    }
}

export default function Lesson({ params }: PropsType) {
    const t = useTranslations("Course");
    return (
        <>
            <LessonItem lessonId={params.id} loc={params.locale} accessdenied={t("accessdenied")} />
        </>
    );
}
