"use client";
import style from "./RegistrationForm.module.css";
import { CloseCircle } from "iconsax-react";
import { useRegistration } from "./lib/hook";
import { useState } from "react";


type PropsType = {
    loc: string;
    username: string;
    password: string;
    registration?: string;
    text?:string;
    titleError:string;
    description:string;
};

export const RegistrationForm = ({ ...props }: PropsType) => {
    const data = useRegistration({ loc: props.loc, titleError:props.titleError, description:props.description });

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

            <div className={style.checkboxContainer}>
                <p>{props.text}</p>
                <input
                    type="checkbox"
                    checked={data.isChecked}
                    onChange={data.handleCheckboxChange}
                />
            </div>

            <div
                className={style.buttonLogin}
                onClick={() => {
                    data.Registration();
                }}
            >
                {props.registration}
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
