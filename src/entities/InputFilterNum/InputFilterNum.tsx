"use client";
import style from "./InputFilterNum.module.css";
import { useState, useEffect } from "react";
import { debounce } from "lodash";

type PropsType = {
    type?: string;
    value: number|null;
    placeholder: string;
    setValue: (key: number|null) => void;
};

export const InputFilterNum = ({ ...props }: PropsType) => {
    const [value, setValue] = useState<number|null>(null);

    const handle = debounce(() => {
        props.setValue(value);
    }, 600);

    useEffect(() => {
        if (value != props.value) {
            handle();
        }
        return () => {
            handle.cancel();
        };
    }, [value]);

    useEffect(() => {
        if (value != props.value) {
            setValue(props.value);
        }
    }, [props.value]);

    return (
        <input
            className={props.type ? style.searchInput : style.filterInput}
            type={"number"}
            placeholder={props.placeholder}
            value={String(value)}
            onChange={(e) => {
                setValue(Number(e.target.value));
            }}
        />
    );
};
