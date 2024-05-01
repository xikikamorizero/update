import { useTranslations } from "next-intl";
import { Main } from "@/page";
import type { Metadata } from "next";
import "./main.css";

export const metadata: Metadata = {
    title: "VoxMentor | Home",
    description: "VoxMentor home page",
};

export default function Home({ params }: { params: { locale: string } }) {
    const t = useTranslations("Main");
    return (
        <div className={"container"}>
            <Main
                loc={params.locale}
                title1={t("title1")}
                title2={t("title2")}
                textLink={t("textLink")}
                text1={t("text1")}
                text2={t("text2")}
                text3={t("text3")}
            />
        </div>
    );
}
