"use client";
import { ItemTable } from "../ItemTable/ItemTable";
import style from "./TraningTable.module.css";
import { Traning } from "@/shared/api/types";
import { observer } from "mobx-react-lite";
import { useState } from "react";

type PropsType = {
    traning?: Traning[];
    editMode: boolean;

    titleTable:string;
    dateTable:string;
    locationTable:string;
    organizationTable:string;
    numberOfHoursTable:string;
    docsTable:string;
};

export const TraningTable = observer(({ ...props }: PropsType) => {
    const [editItem, setEditItem]=useState(-1);
    return (
        <div className={style.container}>
            <div className={style.titleTable}>
                <div className={style.itemTitle}>{props.titleTable}</div>
                <div className={style.itemTitle}>{props.dateTable}</div>
                <div className={style.itemTitle}>{props.locationTable}</div>
                <div className={style.itemTitle}>{props.organizationTable}</div>
                <div className={style.itemTitle}>{props.numberOfHoursTable}</div>
                <div className={style.itemTitle}>{props.docsTable}</div>
            </div>
            {props.traning
                ?.slice()
                .sort((a, b) => a.id - b.id)
                .map((a, i) => (
                    <ItemTable
                        id={String(a.id)}
                        title={a.title}
                        date={a.date}
                        location={a.location}
                        organization={a.organization}
                        hoursSpent={a.hoursSpent}
                        docs={a.docs}
                        editMode={props.editMode}
                        editModeItem={String(editItem)}
                        setEditModeItem={setEditItem}
                        key={i}
                        kei={i}
                    />
                ))}
            {props.editMode && (
                <ItemTable
                    id={""}
                    title={""}
                    date={""}
                    location={""}
                    organization={""}
                    hoursSpent={0}
                    editMode={props.editMode}
                    create={"true"}
                    editModeItem={String(editItem)}
                    setEditModeItem={setEditItem}
                    key={100}
                    kei={3232}
                />
            )}
        </div>
    );
});
