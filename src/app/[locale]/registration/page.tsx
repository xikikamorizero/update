import type { Metadata } from "next";
import { Login } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Registration",
    description: "VoxMentor registration page",
};

export default function Registration() {
    return (
        <>
            <Login reg={true} title={"Sing up"} />
        </>
    );
}
