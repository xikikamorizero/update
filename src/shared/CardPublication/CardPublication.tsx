"use client";
import Link from "next/link";
import style from "./CardPublication.module.css";
import { useProject } from "./lib/hook";
import { Edit2, CloseCircle, AddCircle, DocumentDownload } from "iconsax-react";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Preloader } from "../Preloader/Preloader";
import { DocsUploade } from "@/widgets/CreateAward/DocsUploader";
import { baseUrl } from "../api/const";

type PropsType = {
    title?: string;
    year?: number;
    type?: string;
    link: string | null;
    docs: string | null;
    editMode: boolean;
    id: string;
    create?: string;

    addTitleT?: string;
    addYearT?: string;
    addTypeT?: string;
    addLinkT?: string;

    linkT: string;
    docsT: string;

    add_docsT?: string;

    yearT: string;
};

export const CardPublication = observer(({ ...props }: PropsType) => {
    const data = useProject({
        publishId: props.id,
        title: props.title,
        year: props.year,
        type: props.type,
        link: props.link,
        docs: props.docs,
    });

    useEffect(() => {
        if (!props.editMode) {
            data.setEditModeItem(false);
        }
    }, [props.editMode]);

    return (
        <div className={style.cardContainer}>
            {data.contextHolder}
            {data.loadingProf ? (
                <div className={style.preloaderContainer}>
                    <div className={style.preloader}>
                        <Preloader />
                    </div>
                </div>
            ) : (
                <>
                    {data.editModeItem || props.create ? (
                        <div className={style.cardFormContainer}>
                            <input
                                type={"text"}
                                value={data.title}
                                placeholder={props.addTitleT}
                                onChange={(e) => {
                                    data.setTitle(e.target.value);
                                }}
                            />
                            <input
                                type={"text"}
                                value={data.type}
                                placeholder={props.addTypeT}
                                onChange={(e) => {
                                    data.setType(e.target.value);
                                }}
                            />
                            <input
                                type={"number"}
                                value={data.year}
                                placeholder={props.addYearT}
                                onChange={(e) => {
                                    data.setYear(Number(e.target.value));
                                }}
                            />
                            <input
                                type={"text"}
                                value={data.link}
                                placeholder={props.addLinkT}
                                onChange={(e) => {
                                    data.setLink(e.target.value);
                                }}
                            />
                            {props.add_docsT && (
                                <DocsUploade
                                    fileList={data.docs}
                                    setFileList={data.setDocs}
                                    add_docs={props.add_docsT}
                                />
                            )}
                        </div>
                    ) : (
                        <div className={style.cardContainer}>
                            {props.title !== "null" && <h1>{props.title}</h1>}
                            {props.type !== "null" && (
                                <p className={style.type}>{props.type}</p>
                            )}

                            {props.yearT !== "null" && (
                                <p className={style.year}>
                                    {props.yearT}: {props.year}
                                </p>
                            )}

                            {props.link && props.link !== "null" ? (
                                <Link
                                    className={style.link}
                                    href={props.link}
                                    target={"_blank"}
                                >
                                    {props.linkT}
                                </Link>
                            ) : (
                                <></>
                            )}
                            {props.docs && (
                                <Link
                                    className={style.link}
                                    href={baseUrl + props.docs}
                                    target={"_blank"}
                                >
                                    {props.docsT}
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
                                        <AddCircle
                                            className={style.editButton}
                                        />
                                    )}
                                </button>
                            ) : (
                                <Edit2
                                    className={style.editButton}
                                    onClick={() => {
                                        data.setEditModeItem(
                                            !data.editModeItem
                                        );
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
                                    <CloseCircle
                                        className={style.deleteButton}
                                    />
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
                    )}{" "}
                </>
            )}
        </div>
    );
});
