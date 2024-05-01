"use client";
import style from "./LoginForm.module.css";
import { CloseCircle } from "iconsax-react";
import Link from "next/link";
import { useLogin } from "./lib/hook";

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
            <input
                value={data.password}
                onChange={(e) => {
                    data.setPassword(e.target.value);
                }}
                className={style.inputLogin}
                type={"text"}
                placeholder={props.password}
            />
            <div
                className={style.buttonLogin}
                onClick={() => {
                    data.Login();
                }}
            >
                {props.log_in}
            </div>
            <div className={style.newAccBlock}>
                <p className={style.newAccBlockText}>{props.no_account}</p>
                <Link href={`/${props.loc}/registration`}>{props.create}</Link>
            </div>
            <CloseCircle
                onClick={() => {
                    data.router.push(`/${props.loc}`);
                }}
                className={style.closeIcon}
                size="32"
                color="#000000"
            />
        </div>
    );
};
