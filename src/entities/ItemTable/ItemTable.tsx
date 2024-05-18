"use client";
import { baseUrl } from "@/shared/api/const";
import style from "./TraningTable.module.css";
import { useProject } from "./lib/hook";
import { observer } from "mobx-react-lite";
import {
    Edit2,
    CloseCircle,
    AddCircle,
    Link as LinkIco,
    DocumentDownload,
} from "iconsax-react";
import Link from "next/link";
import { Preloader } from "@/shared/Preloader/Preloader";

type PropsType = {
    id: string;
    title: string;
    date: string;
    location: string;
    organization: string;
    hoursSpent: number;
    image?: string;
    docs?: string | null;
    editMode: boolean;
    create?: string;
    kei: number;
    editModeItem: string;
    setEditModeItem: (a: number) => void;
};

export const ItemTable = observer(({ ...props }: PropsType) => {
    const data = useProject(props);

    return (
        <div className={style.wrapper}>
            {data.contextHolder}
            {props.editModeItem == props.id || props.create ? (
                <div className={style.titleTable}>
                    <input
                        className={`${style.input} ${style.item}`}
                        value={data.title}
                        onChange={(e) => {
                            data.setTitle(e.target.value);
                        }}
                    />
                    <input
                        className={`${style.input} ${style.item}`}
                        value={data.date}
                        onChange={(e) => {
                            data.setDate(e.target.value);
                        }}
                    />
                    <input
                        className={`${style.input} ${style.item}`}
                        value={data.location}
                        onChange={(e) => {
                            data.setLocation(e.target.value);
                        }}
                    />
                    <input
                        className={`${style.input} ${style.item}`}
                        value={data.organization}
                        onChange={(e) => {
                            data.setOrganization(e.target.value);
                        }}
                    />
                    <input
                        type={"number"}
                        className={`${style.input} ${style.item}`}
                        value={data.hoursSpent}
                        onChange={(e) => {
                            data.setHoursSpent(Number(e.target.value));
                        }}
                    />
                    <div className={`${style.input} ${style.panel}`}>
                        <div className={style.fileInputContainer}>
                            <input
                                type="file"
                                id="imageinput"
                                className={style.fileInput}
                                onChange={data.handleFileChange}
                            />

                            <label
                                htmlFor="imageinput"
                                className={`${style.inputImage} ${
                                    data.docs ? style.fileSelected : ""
                                }`}
                            >
                                <DocumentDownload
                                    className={`${style.inputImage} ${
                                        data.docs ? style.fileSelected : ""
                                    }`}
                                />
                            </label>
                        </div>

                        {props.editMode && !props.create ? (
                            <div className={style.panelUpr}>
                                {props.editModeItem == props.id ? (
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
                                    <>
                                        <Edit2
                                            className={style.editButton}
                                            onClick={() => {
                                                props.setEditModeItem(
                                                    Number(props.id)
                                                );
                                            }}
                                        />
                                    </>
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
                                        <AddCircle
                                            className={style.editButton}
                                        />
                                    )}
                                </button>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            ) : (
                <div className={style.titleTable}>
                    <div className={`${style.itemTitle} ${style.item}`}>
                        {props.title ? props.title : "null"}
                    </div>
                    <div className={`${style.itemTitle} ${style.item}`}>
                        {props.date ? props.date : "null"}
                    </div>
                    <div className={`${style.itemTitle} ${style.item}`}>
                        {props.location ? props.location : "null"}
                    </div>
                    <div className={`${style.itemTitle} ${style.item}`}>
                        {props.organization ? props.organization : "null"}
                    </div>
                    <div className={`${style.itemTitle} ${style.item}`}>
                        {props.hoursSpent}
                    </div>
                    <div className={`${style.itemTitle}  ${style.panel}`}>
                        {props.docs ? (
                            <Link
                                href={`${baseUrl}/${props.docs}`}
                                target={"_blank"}
                            >
                                <LinkIco className={style.link} />
                            </Link>
                        ) : (
                            <>null</>
                        )}

                        {props.editMode && !props.create ? (
                            <div className={style.panelUpr}>
                                <Edit2
                                    className={style.editButton}
                                    onClick={() => {
                                        props.setEditModeItem(Number(props.id));
                                    }}
                                />

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
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
});
