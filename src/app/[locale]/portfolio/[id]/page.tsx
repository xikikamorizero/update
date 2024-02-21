import type { Metadata } from "next";
import { PortfolioItem } from "@/page";

type PropsType = {
    params: {
        id: string;
    };
};

export async function generateMetadata({ params }: PropsType) {
    const portfolio = await fetch(
        `http://localhost:5000/portfolio/${params.id}`
    ).then((res) => res.json()).catch((error) => {});;
    return {
        title: portfolio.title ? portfolio.title : `Portfolio ${params.id}`,
    };
}

export default function Portfolio({ params }: PropsType) {
    return (
        <>
            <PortfolioItem portfolioId={params.id} />
        </>
    );
}
