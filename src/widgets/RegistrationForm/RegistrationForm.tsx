"use client";
import style from "./RegistrationForm.module.css";
import { CloseCircle } from "iconsax-react";
import { useRegistration } from "./lib/hook";

type PropsType = {
    loc: string;
    username: string;
    password: string;
    registration?: string;
};

export const RegistrationForm = ({ ...props }: PropsType) => {
   
    const {username, setUsername, password, setPassword, Registration, router} = useRegistration({loc:props.loc})

    return (
        <div className={style.formContainer}>
            <input
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
                className={style.inputLogin}
                type={"text"}
                placeholder={props.username}
            />
            <input
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                className={style.inputLogin}
                type={"text"}
                placeholder={props.password}
            />
            <div className={style.buttonLogin} onClick={()=>{Registration()}}>{props.registration}</div>
            <CloseCircle
                onClick={() => {
                    router.push(`/${props.loc}`);
                }}
                className={style.closeIcon}
                size="32"
                color="#000000"
            />
        </div>
    );
};
