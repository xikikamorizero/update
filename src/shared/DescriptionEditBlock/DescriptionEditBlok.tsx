"use client";
import style from "./DescriptionEditBlok.module.css";
import { useState, memo } from "react";
import { ArrowUp, ArrowDown } from "iconsax-react";
type PropsType = {
    editMode?: boolean;
    value?: string | null;
    setValue?: (a: string) => void;
    placeholder?: string;
    text?: string | null;
    descriptionT?: string;
};

export const DescriptionEditBlok = memo(({ ...props }: PropsType) => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const renderedText = showAll
        ? props.text
        : props.text
        ? props.text.substring(0, 100)
        : "";

    return (
        <>
            {props.editMode ? (
                <textarea
                    className={style.inputTitle}
                    placeholder={props.placeholder}
                    value={props.value ? props.value : ""}
                    onChange={(e) => {
                        if (props.setValue) props.setValue(e.target.value);
                    }}
                />
            ) : (
                <div className={style.containerItemP}>
                    <h1 className={style.description}>{props.descriptionT}:</h1>
                    <p className={style.description}>
                        {renderedText ? renderedText : "null"}
                    </p>
                    {props.text && props.text.length > 100 && (
                        <button
                            className={style.buttonT}
                            onClick={toggleShowAll}
                        >
                            {showAll ? <ArrowUp className={style.iconArr} /> : <ArrowDown className={style.iconArr} />}
                        </button>
                    )}
                </div>
            )}
        </>
    );
});

DescriptionEditBlok.displayName = "DescriptionEditBlok";
