"use client";
import style from "./RegistrationForm.module.css";
import { CloseCircle } from "iconsax-react";
import { useRegistration } from "./lib/hook";
import { useState } from "react";
import { Eye, EyeSlash } from "iconsax-react";
import { Preloader } from "@/shared/Preloader/Preloader";

type PropsType = {
    loc: string;
    username: string;
    password: string;
    registration?: string;
    text?: string;
    titleError: string;
    description: string;
};

export const RegistrationForm = ({ ...props }: PropsType) => {
    const data = useRegistration({
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

            <div className={style.checkboxContainer}>
                <p>{props.text}</p>
                <input
                    type="checkbox"
                    checked={data.isChecked}
                    onChange={data.handleCheckboxChange}
                />
            </div>

            <button
                disabled={data.loading}
                className={style.buttonLogin}
                onClick={() => {
                    data.Registration();
                }}
            >
                {data.loading ? (
                    <div className={style.preloadCo}>
                        <Preloader />
                    </div>
                ) : (
                    props.registration
                )}
            </button>

            <CloseCircle
                onClick={() => {
                    data.router.push(`/${props.loc}/login`);
                }}
                className={style.closeIcon}
                size="32"
                color="#000000"
            />
        </div>
    );
};
