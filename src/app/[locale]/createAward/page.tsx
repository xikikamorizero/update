import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { CreateAward as CreateAwardComponents } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Create Award",
    description: "VoxMentor create award page",
};

export default function CreateAward({
    params,
}: {
    params: { locale: string };
}) {
    return (
        <>
            <CreateAwardComponents loc={params.locale} />
        </>
    );
}
