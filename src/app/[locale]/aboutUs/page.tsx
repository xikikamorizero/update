import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { AboutUs } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | AboutUs",
    description: "VoxMentor about us page",
};

export default function About() {
    const t = useTranslations("About");
    return (
        <>
            <AboutUs
                title_1={t("title")}
                text_1={t("text")}
                title_2={t("title_2")}
                text_2={t("text_2")}
                title_3={t("title_3")}
                text_3={t("text_3")}
                title_4={t("title_4")}
                text_4={t("text_4")}
            />
        </>
    );
}
