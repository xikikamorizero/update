import type { Metadata } from "next";
import { Portfolio as PortfolioPage } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Portfolio",
    description: "VoxMentor portfolio page",
};

export default function Portfolio({ params }: { params: { locale: string } }) {
    return (
        <>
            <PortfolioPage loc={params.locale} />
        </>
    );
}
