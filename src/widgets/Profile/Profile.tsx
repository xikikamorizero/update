"use client";
import style from "./Profile.module.css";
import { observer } from "mobx-react-lite";
import React from "react";
import { Profile as ProfileIcon } from "iconsax-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { baseUrl } from "@/shared/api/const";
import Link from "next/link";
import { useProfile } from "./lib/hook";

export const Profile = observer(({loc}:{loc:string}) => {
    let router = useRouter();
    const { store } = useProfile();

    return (
        <div className={style.profileContainer}>
            {store.isAuth ? (
                <Link className={style.link} href={`/${loc}/profile`}>
                    <div
                        className={style.profile}
                        style={{
                            backgroundImage: `url(${
                                baseUrl + store.profile?.avatar
                            })`,
                        }}
                    ></div>
                </Link>
            ) : (
                <ProfileIcon
                    size="30"
                    color="#ffffff"
                    onClick={() => {
                        router.push(`/${loc}/login`);
                    }}
                />
            )}
        </div>
    );
});
