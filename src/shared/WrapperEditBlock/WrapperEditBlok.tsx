import style from './WrapperEditBlok.module.css';
import {ReactNode, memo} from 'react';
type PropsType = {
    editMode?: boolean;
    value?: string | null;
    setValue?: (a: string) => void;
    placeholder: string;
    block: ReactNode;
};

export const WrapperEditBlock = memo(({ ...props }: PropsType) => {
    return (
        <>
            {props.editMode ? (
                <input
                    className={style.inputTitle}
                    type={"text"}
                    placeholder={"add name"}
                    value={props.value ? props.value : ""}
                    onChange={(e) => {
                        if (props.setValue) props.setValue(e.target.value);
                    }}
                />
            ) : (
                props.block
            )}
        </>
    );
});