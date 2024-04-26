"use client";
import style from "./Categories.module.css";
import { CloseCircle, AddCircle } from "iconsax-react";
import { useState } from "react";

type PropsType = {
    categories?: string[] | null;
    setCategories?: (a: string[]) => void;
    editMode?: boolean;
};

export const Categories = ({ ...props }: PropsType) => {
    const [value, setValue] = useState("");

    let categories = props.categories? [...props.categories]: [];

    function DeleteItem(id: number) {
        categories.splice(id, 1);
        if(props.setCategories) props.setCategories(categories);
    }

    function AddItem() {
        const trimmedValue = value.trim();
        if(trimmedValue){
            categories.push(value);
            if(props.setCategories) props.setCategories(categories);
            setValue("")
        }
    }

    return (
        <div className={style.container}>
            {props.categories?.map((a, i) => (
                <div className={style.item} key={i}>
                    {a}
                    {props.editMode ? (
                        <CloseCircle
                            onClick={() => {
                                DeleteItem(i);
                            }}
                            className={style.icon}
                            size="20"
                            color="#ff3c00"
                        />
                    ) : null}
                </div>
            ))}
            {props.editMode ? (
                <div className={style.addCategory}>
                    <input
                        type={"text"}
                        className={style.inputTitle}
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                        placeholder={"категория"}
                    />
                    <AddCircle
                        onClick={() => {
                            AddItem();
                        }}
                        className={style.icon}
                        size="25"
                        color="#ffffff"
                    />
                </div>
            ) : null}
        </div>
    );
};
