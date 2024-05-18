"use client";
import Link from "next/link";
import style from "./CardPublication.module.css";
import { useProject } from "./lib/hook";
import { Edit2, CloseCircle, AddCircle } from "iconsax-react";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Preloader } from "../Preloader/Preloader";

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
            {data.contextHolder}
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
                        <button
                            disabled={data.loading}
                            className={style.editButton}
                            onClick={() => {
                                data.Edit();
                            }}
                        >
                            {data.loading ? (
                                <Preloader />
                            ) : (
                                <AddCircle className={style.editButton} />
                            )}
                        </button>
                    ) : (
                        <Edit2
                            className={style.editButton}
                            onClick={() => {
                                data.setEditModeItem(!data.editModeItem);
                            }}
                        />
                    )}
                    <button
                        disabled={data.loading}
                        className={style.deleteButton}
                        onClick={() => {
                            data.Delete();
                        }}
                    >
                        {data.loading ? (
                            <Preloader />
                        ) : (
                            <CloseCircle className={style.deleteButton} />
                        )}
                    </button>
                </div>
            ) : props.create ? (
                <div className={style.panelUpr}>
                    <button
                        disabled={data.loading}
                        className={style.editButton}
                        onClick={() => {
                            data.Create();
                        }}
                    >
                        {data.loading ? (
                            <Preloader />
                        ) : (
                            <AddCircle className={style.editButton} />
                        )}
                    </button>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
});
