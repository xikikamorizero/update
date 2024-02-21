import type { Metadata } from "next";
import { User as UserPage } from "@/page";

type PropsType = {
    params: {
        id: string;
        locale: string;
    };
};

export async function generateMetadata({ params }: PropsType) {
    const user = await fetch(`http://localhost:5000/users/${params.id}`)
        .then((res) => res.json())
        .catch((error) => null);
    return {
        title: user?.name ? user.name : `User ${params.id}`,
    };
}

export default function User({ params }: PropsType) {
    return (
        <>
            <UserPage userId={params.id} loc={params.locale} />
        </>
    );
}
