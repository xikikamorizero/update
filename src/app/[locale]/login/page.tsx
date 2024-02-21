import type { Metadata } from "next";
import { Login as LoginPage } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Login",
    description: "VoxMentor login page",
};

export default function Login() {
    return (
        <>
            <LoginPage title={"Sing in"} />
        </>
    );
}
