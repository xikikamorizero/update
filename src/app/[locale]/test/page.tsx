import type { Metadata } from "next";
import { EditPortfolio } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Test",
    description: "VoxMentor test page",
};

export default function Test() {
    return (
        <>
            <EditPortfolio />
        </>
    );
}
