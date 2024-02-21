import type { Metadata } from "next";
import { CreateCourse as CreateCoursePage } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Create Course",
    description: "VoxMentor create course page",
};

export default function CreatePortfolio({ params }: { params: { locale: string } }) {
    return (
        <>
            <CreateCoursePage loc={params.locale} />
        </>
    );
}
