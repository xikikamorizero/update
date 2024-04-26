import { ReactNode } from "react";
import style from "./Login.module.css";
import { LoginForm, RegistrationForm } from "@/widgets";

type PropsType = {
    reg?: boolean;
    loc: string;
    title: string;
    username: string;
    password: string;
    log_in?: string;
    no_account?: string;
    create: string;
    registration?: string;
    text?: string;
};

export const Login = ({ ...props }: PropsType) => {
    return (
        <div className={style.container}>
            <div className={style.login}>
                <p className={style.title}>{props.title}</p>
                {props.reg ? (
                    <RegistrationForm
                        loc={props.loc}
                        registration={props.registration}
                        username={props.username}
                        password={props.password}
                        text={props.text}
                    />
                ) : (
                    <LoginForm
                        loc={props.loc}
                        log_in={props.log_in}
                        username={props.username}
                        password={props.password}
                        no_account={props.no_account}
                        create={props.create}
                    />
                )}
            </div>
        </div>
    );
};
