import type { Metadata } from "next";
import { CreateLesson as CreateLessonPage } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Create Lesson",
    description: "VoxMentor create lesson page",
};

export default function CreateLesson({ params }: { params: { locale: string } }) {
    return (
        <>
            <CreateLessonPage loc={params.locale} />
        </>
    );
}
