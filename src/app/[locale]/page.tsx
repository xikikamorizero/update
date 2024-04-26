import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import "./main.css";

export const metadata: Metadata = {
    title: "VoxMentor | Home",
    description: "VoxMentor home page",
};

// export async function generateMetadata() {
//     const user = await fetch(`http://localhost:5000/users/1`)
//         .then((res) => res.json())
//         .catch((error) => null);
//     return {
//         title: user?.name,
//     };
// }

export default function Home() {
    const t = useTranslations("IndexPage");
    return (
        <div className={"container"}>
            dsdsdsdsdsds
        </div>
    );
}
