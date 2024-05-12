"use client";
import { ItemTable } from "../ItemTable/ItemTable";
import style from "./TraningTable.module.css";
import { Traning } from "@/shared/api/types";
import { observer } from "mobx-react-lite";

type PropsType = {
    traning?: Traning[];
    editMode: boolean;
};

export const TraningTable = observer(({ ...props }: PropsType) => {
    return (
        <div className={style.container}>
            <div className={style.titleTable}>
                <div className={style.itemTitle}>Название</div>
                <div className={style.itemTitle}>Дата</div>
                <div className={style.itemTitle}>Место</div>
                <div className={style.itemTitle}>Организация</div>
                <div className={style.itemTitle}>Кол.часов</div>
                <div className={style.itemTitle}>Доки</div>
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
                    key={100}
                    kei={3232}
                />
            )}
        </div>
    );
});
