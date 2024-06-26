"use client";
import style from "./LanguageSwitcher.module.css";
import { useLocale } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useTransition } from "react";

export const LanguageSwitcher = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const path = usePathname();
    const pathSearch = useSearchParams();
    const current = new URLSearchParams(Array.from(pathSearch.entries()));
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        const languageRegex = /^(\/en|\/ru|\/uz)(\/|$)/;

        const search = current.toString();
        const query = search ? `?${search}` : "";
        const fullPath = `${path}${query}`;
        const newPath = fullPath.replace(languageRegex, "/");
        startTransition(() => {
            router.replace(`/${nextLocale}${newPath}`);
        });
    };

    return (
        <div className={style.containerSwitcher}>
            <select
                defaultValue={localActive}
                className={style.selectCust}
                onChange={onSelectChange}
                disabled={isPending}
            >
                <option value="en" className={style.lang}>
                    EN
                </option>
                <option value="uz" className={style.lang}>
                    UZ
                </option>
                <option value="ru" className={style.lang}>
                    RU
                </option>
            </select>
        </div>
    );
};
