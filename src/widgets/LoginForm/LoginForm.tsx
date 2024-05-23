"use client";
import style from "./LoginForm.module.css";
import { CloseCircle } from "iconsax-react";
import Link from "next/link";
import { useLogin } from "./lib/hook";
import { Eye, EyeSlash } from "iconsax-react";
import { useState } from "react";
import { Preloader } from "@/shared/Preloader/Preloader";

type PropsType = {
    loc: string;
    username: string;
    password: string;
    log_in?: string;
    no_account?: string;
    create: string;
    titleError: string;
    description: string;
};

export const LoginForm = ({ ...props }: PropsType) => {
    const data = useLogin({
        loc: props.loc,
        titleError: props.titleError,
        description: props.description,
    });
    const [viewPass, setViewPass] = useState(false);

    return (
        <div className={style.formContainer}>
            {data.contextHolder}
            <input
                value={data.username}
                onChange={(e) => {
                    data.setUsername(e.target.value);
                }}
                className={style.inputLogin}
                type={"text"}
                placeholder={props.username}
            />
            <div className={style.passwordContainer}>
                <input
                    value={data.password}
                    onChange={(e) => {
                        data.setPassword(e.target.value);
                    }}
                    className={style.inputPassword}
                    type={viewPass ? "text" : "password"}
                    placeholder={props.password}
                />
                <div
                    className={style.iconEye}
                    onClick={() => {
                        setViewPass(!viewPass);
                    }}
                >
                    {viewPass ? (
                        <EyeSlash className={style.iconEye} />
                    ) : (
                        <Eye className={style.iconEye} />
                    )}
                </div>
            </div>

            <button
                disabled={data.loading}
                className={style.buttonLogin}
                onClick={() => {
                    data.Login();
                }}
            >
                {data.loading?  <div className={style.preloadCo}>
                            <Preloader />
                        </div>:
                     props.log_in
                }
           
            </button>
            <div className={style.newAccBlock}>
                <p className={style.newAccBlockText}>{props.no_account}</p>
                <Link href={`/${props.loc}/registration`}>{props.create}</Link>
            </div>
            {/* <CloseCircle
                onClick={() => {
                    data.router.push(`/${props.loc}`);
                }}
                className={style.closeIcon}
                size="32"
                color="#000000"
            /> */}
        </div>
    );
};
