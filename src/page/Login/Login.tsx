import { ReactNode } from "react";
import style from "./Login.module.css";
import { LoginForm, RegistrationForm } from "@/widgets";

type PropsType = {
    reg: boolean;
    title: string;
};

export const Login = ({ ...props }: PropsType) => {
    return (
        <div className={style.container}>
            <div className={style.login}>
                <p className={style.title}>{props.title}</p>
                {props.reg ? <RegistrationForm /> : <LoginForm />}
            </div>
        </div>
    );
};
