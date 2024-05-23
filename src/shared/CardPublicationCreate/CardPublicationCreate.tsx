"use client";
import Link from "next/link";
import style from "./CardPublicationCreate.module.css";
import { useProject } from "./lib/hook";
import { Edit2, CloseCircle, AddCircle, DocumentDownload } from "iconsax-react";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Preloader } from "../Preloader/Preloader";

type PropsType = {
    addTitleT?: string;
    addYearT?: string;
    addTypeT?: string;
    addLinkT?: string;
    linkT?: string;
};

export const CardPublicationCreate = observer(({ ...props }: PropsType) => {
    const data = useProject();

    return (
        <div className={style.cardContainer}>
            {data.contextHolder}

            <div className={style.cardContainer}>
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
            </div>

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
                        {/* <DocumentDownload
                            className={`${style.inputImage} ${
                                data.docs ? style.fileSelected : ""
                            }`}
                        /> */}
                    </label>
                </div>
            </div>
        </div>
    );
});
