"use client";
import style from './WrapperEditBlok.module.css';
import {ReactNode, memo} from 'react';
type PropsType = {
    editMode?: boolean;
    value?: number;
    setValue?: (a: number) => void;
    placeholder?: string;
    block: ReactNode;
};

export const WrapperEditBlockNum = memo(({ ...props }: PropsType) => {
    return (
        <>
            {props.editMode ? (
                <input
                    className={style.inputTitle}
                    type={'number'}
                    placeholder={props.placeholder}
                    value={props.value ? props.value : ""}
                    onChange={(e) => {
                        if (props.setValue) props.setValue(Number(e.target.value));
                    }}
                />
            ) : (
                props.block
            )}
        </>
    );
});

WrapperEditBlockNum.displayName = 'WrapperEditBlockNum';