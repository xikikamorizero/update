import axios from "axios";
import { AwardItem } from "@/page";

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
        
        const Response = await axios.get(`http://localhost:5000/award/${params.id}`, {
            headers: {
                Authorization: `Bearer ${loginResponse.data.token}`,
            },
        });

        return {
            title: Response.data.title,
        };
    } catch (error) {
        return {
            title: `Award ${params.id}`,
        };
    }
}

export default function Award({ params }: PropsType) {
    return (
        <>
            <AwardItem id={params.id} loc={params.locale} />
        </>
    );
}
