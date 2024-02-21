"use client";
import style from "./InputFilter.module.css";
import { useState, useEffect } from "react";
import { debounce } from "lodash";

type PropsType = {
    type?: string;
    value: string;
    placeholder: string;
    setValue: (key: string) => void;
};

export const InputFilter = ({ ...props }: PropsType) => {
    const [value, setValue] = useState("");

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
            type={"text"}
            placeholder={props.placeholder}
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
            }}
        />
    );
};
