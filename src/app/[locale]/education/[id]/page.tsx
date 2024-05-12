import axios from "axios";
import { AwardItem, EducationItem } from "@/page";

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

        const Response = await axios.get(
            `http://localhost:5000/education/${params.id}`,
            {
                headers: {
                    Authorization: `Bearer ${loginResponse.data.token}`,
                },
            }
        );

        return {
            title: Response.data.title,
        };
    } catch (error) {
        return {
            title: `Education ${params.id}`,
        };
    }
}

export default function Education({ params }: PropsType) {
    return (
        <>
            <EducationItem id={params.id} loc={params.locale} />
        </>
    );
}
