import { ReactNode } from "react";
import style from "./Login.module.css";
import { LoginForm, RegistrationForm } from "@/widgets";
import { WithWrapperIsAuth } from "@/features/hoc/authRedirectLogAndReg";

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
    titleError: string;
    description: string;
};

export const Login = ({ ...props }: PropsType) => {
    return (
        <div className={style.container}>
            <WithWrapperIsAuth loc={props.loc}>
                <div className={style.login}>
                    <p className={style.title}>{props.title}</p>
                    {props.reg ? (
                        <RegistrationForm
                            loc={props.loc}
                            registration={props.registration}
                            username={props.username}
                            password={props.password}
                            titleError={props.titleError}
                            description={props.description}
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
                            titleError={props.titleError}
                            description={props.description}
                        />
                    )}
                </div>
            </WithWrapperIsAuth>
        </div>
    );
};
