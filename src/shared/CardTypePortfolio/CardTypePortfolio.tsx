"use client";
import Link from "next/link";
import style from "./CardTypePortfolio.module.css";
import { useProject } from "./lib/hook";
import { Edit2, CloseCircle, AddCircle } from "iconsax-react";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

type PropsType = {
    title_en?: string;
    title_ru?: string;
    title_uz?: string;
    description?: string;
    editMode: boolean;
    id: string;
    create?: string;
    count?: number;
    hrefAuthor: string;
    descriptionT?: string;
    authorT?: string;

    title_enT?: string;
    title_ruT?: string;
    title_uzT?: string;
    countT?: string;

    re: () => void;
};

export const CardTypePortfolio = observer(({ ...props }: PropsType) => {
    const data = useProject({
        id: props.id,
        title_en: props.title_en,
        title_ru: props.title_ru,
        title_uz: props.title_uz,
        re: props.re,
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
                        value={data.titleEn}
                        placeholder={props.title_enT}
                        onChange={(e) => {
                            data.setTitleEn(e.target.value);
                        }}
                    />
                    <input
                        type={"text"}
                        value={data.titleRu}
                        placeholder={props.title_ruT}
                        onChange={(e) => {
                            data.setTitleRu(e.target.value);
                        }}
                    />
                    <input
                        type={"text"}
                        value={data.titleUz}
                        placeholder={props.title_uzT}
                        onChange={(e) => {
                            data.setTitleUz(e.target.value);
                        }}
                    />
                    <textarea
                        value={data.description}
                        placeholder={props.descriptionT}
                        onChange={(e) => {
                            data.setDescription(e.target.value);
                        }}
                    />
                </div>
            ) : (
                <div className={style.cardContainer}>
                    <h1>{props.title_en}</h1>
                    <p className={style.type}>{props.title_ru}</p>
                    <p className={style.year}>{props.title_uz}</p>
                    <p className={style.year}>{props.description}</p>
                    <p className={style.year}>
                        {props.countT}: {props.count}
                    </p>
                    <Link href={props.hrefAuthor}>{props.authorT}</Link>
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
