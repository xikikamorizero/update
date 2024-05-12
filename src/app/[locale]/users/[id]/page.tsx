import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { User as UserPage } from "@/page";

type PropsType = {
    params: {
        id: string;
        locale: string;
    };
};

export async function generateMetadata({ params }: PropsType) {
    const user = await fetch(`http://localhost:5000/users/${params.id}`)
        .then((res) => res.json())
        .catch((error) => null);
    return {
        title: user?.name ? user.name : `User ${params.id}`,
    };
}

export default function User({ params }: PropsType) {
    const t = useTranslations("Profile");
    return (
        <>
            <UserPage
                userId={params.id}
                loc={params.locale}
                subscribers={t("subscribers")}
                no_subscribers={t("no_subscribers")}
                portfolio_title={t("portfolio_title")}
                course_title={t("course_title")}
                subscribe={t("subscribe")}
                unsubscribe={t("unsubscribe")}

                staj={t("staj")}
                positionT={t("positionT")}
                educationT={t("educationT")}
                traningT={t("traningT")}
                publicationT={t("publicationT")}
                awardT={t("awardT")}
                descriptionT={t("descriptionT")}
                contactsT={t("contactsT")}
                scienceDegreeT={t("scienceDegreeT")}
            />
        </>
    );
}
