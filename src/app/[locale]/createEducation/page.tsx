import type { Metadata } from "next";
import { CreateEducation as CreateEducationComponents } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Create Education",
    description: "VoxMentor create education page",
};

export default function CreateEducation({
    params,
}: {
    params: { locale: string };
}) {
    return (
        <>
            <CreateEducationComponents loc={params.locale}/>
        </>
    );
}
