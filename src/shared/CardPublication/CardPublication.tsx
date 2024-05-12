"use client";
import Link from "next/link";
import style from "./CardPublication.module.css";
import { useProject } from "./lib/hook";
import { Edit2, CloseCircle, AddCircle } from "iconsax-react";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

type PropsType = {
    title?: string;
    year?: number;
    type?: string;
    link: string | null;
    editMode: boolean;
    id: string;
    create?: string;
};

export const CardPublication = observer(({ ...props }: PropsType) => {
    const data = useProject({
        publishId: props.id,
        title: props.title,
        year: props.year,
        type: props.type,
        link: props.link,
    });

    useEffect(() => {
        if (!props.editMode) {
            data.setEditModeItem(false);
        }
    }, [props.editMode]);

    return (
        <div className={style.cardContainer}>
            {data.editModeItem || props.create ? (
                <div className={style.cardContainer}>
                    <input
                        type={"text"}
                        value={data.title}
                        onChange={(e) => {
                            data.setTitle(e.target.value);
                        }}
                    />
                    <input
                        type={"text"}
                        value={data.type}
                        onChange={(e) => {
                            data.setType(e.target.value);
                        }}
                    />
                    <input
                        type={"number"}
                        value={data.year}
                        onChange={(e) => {
                            data.setYear(Number(e.target.value));
                        }}
                    />
                    <input
                        type={"text"}
                        value={data.link}
                        onChange={(e) => {
                            data.setLink(e.target.value);
                        }}
                    />
                </div>
            ) : (
                <div className={style.cardContainer}>
                    <h1>{props.title}</h1>
                    <p className={style.type}>{props.type}</p>
                    <p className={style.year}>{props.year}</p>
                    {props.link && (
                        <Link
                            className={style.link}
                            href={props.link}
                            target={"_blank"}
                        >
                            Ссылка
                        </Link>
                    )}
                </div>
            )}
            {props.editMode && !props.create ? (
                <div className={style.panelUpr}>
                    {data.editModeItem ? (
                        <AddCircle
                            className={style.editButton}
                            onClick={() => {
                                data.Edit();
                                data.setEditModeItem(false);
                            }}
                        />
                    ) : (
                        <Edit2
                            className={style.editButton}
                            onClick={() => {
                                data.setEditModeItem(!data.editModeItem);
                            }}
                        />
                    )}

                    <CloseCircle
                        className={style.deleteButton}
                        onClick={() => {
                            data.Delete();
                        }}
                    />
                </div>
            ) : props.create ? (
                <div className={style.panelUpr}>
                    <AddCircle
                        className={style.editButton}
                        onClick={() => {
                            data.Create();
                        }}
                    />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
});
