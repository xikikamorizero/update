import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { Login as LoginPage } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Login",
    description: "VoxMentor login page",
};

export default function Login({ params }: { params: { locale: string } }) {
    const t = useTranslations("Login");
    return (
        <>
            <LoginPage
                title={t("title_log")}
                loc={params.locale}
                log_in={t("log_in")}
                username={t("username")}
                password={t("password")}
                no_account={t("no_account")}
                create={t("create")}
            />
        </>
    );
}
