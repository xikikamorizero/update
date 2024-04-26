import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { Login } from "@/page";

export const metadata: Metadata = {
    title: "VoxMentor | Registration",
    description: "VoxMentor registration page",
};

export default function Registration({
    params,
}: {
    params: { locale: string };
}) {
    const t = useTranslations("Login");
    return (
        <>
            <Login
                title={t("title_reg")}
                reg={true}
                loc={params.locale}
                log_in={t("log_in")}
                username={t("username")}
                password={t("password")}
                no_account={t("no_account")}
                create={t("create")}
                registration={t("registration")}
                text={t("text")}
            />
        </>
    );
}
