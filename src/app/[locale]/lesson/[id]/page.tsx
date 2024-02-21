import { LessonItem } from "@/page";
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
        console.error("Error:", error);
        return {
            title: `Lesson ${params.id}`,
        };
    }
}

export default function Lesson({ params }: PropsType) {
    return (
        <>
            <LessonItem lessonId={params.id} loc={params.locale} />
        </>
    );
}
