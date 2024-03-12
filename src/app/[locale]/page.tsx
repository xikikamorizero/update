import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import "./main.css";

export const metadata: Metadata = {
    title: "VoxMentor | Home",
    description: "VoxMentor home page",
};

export default function Home() {
    const t = useTranslations("IndexPage");
    return (
        <div className={'container'}>
          dsdsds
        </div>
    );
}
