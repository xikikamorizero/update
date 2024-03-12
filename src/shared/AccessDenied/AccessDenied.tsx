import style from "./AccessDenied.module.css";

export const AccessDenied = ({ text }: { text: string }) => {
    return (
        <div className={style.container}>
            <h1>{text}</h1>
        </div>
    );
};
