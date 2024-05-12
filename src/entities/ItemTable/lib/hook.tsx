"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useEffect, useState } from "react";

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
};

export const useProject = ({ ...props }: PropsType) => {
    const global_store = useContext(GlobalContext);
    const [title, setTitle] = useState(props.title ? props.title : "");
    const [date, setDate] = useState(props.date ? props.date : "");
    const [location, setLocation] = useState(
        props.location ? props.location : ""
    );
    const [organization, setOrganization] = useState(
        props.organization ? props.organization : ""
    );
    const [hoursSpent, setHoursSpent] = useState(
        props.hoursSpent ? props.hoursSpent : 0
    );
    const [docs, setDocs] = useState<any>(props.docs ? props.docs : null);

    const [editModeItem, setEditModeItem] = useState(false);

    const handleFileChange = (event:any) => {
        setDocs(event.target.files[0]);
    };

    useEffect(() => {
        if (!props.editMode) {
            setEditModeItem(false);
        }
    }, [props.editMode]);

    function Edit() {
        global_store.store.UpdatePort.editTraning(
            { id: props.id },
            {
                title,
                date,
                location,
                docs,
                organization,
                hoursSpent: String(hoursSpent),
            }
        )
            .then((response) => {
                global_store.store.updateProfile();
            })
            .catch((error) => {
                console.log("Ошибка Traning", error);
            })
            .finally(() => {});
    }

    function Create() {
        global_store.store.UpdatePort.createTraning({
            title,
            date,
            location,
            organization,
            docs,
            hoursSpent,
        })
            .then((response) => {
                global_store.store.updateProfile();
                setTitle("");
                setDate("");
                setLocation("");
                setOrganization("");
                setHoursSpent(0);
            })
            .catch((error) => {
                console.log("Ошибка Traning", error);
            })
            .finally(() => {});
    }

    function Delete() {
        global_store.store.UpdatePort.deleteTraning({
            id: props.id,
        })
            .then((response) => {
                global_store.store.updateProfile();
            })
            .catch((error) => {
                console.log("Ошибка Traning", error);
            })
            .finally(() => {});
    }

    return {
        title,
        setTitle,
        date,
        setDate,
        location,
        setLocation,
        organization,
        setOrganization,
        hoursSpent,
        setHoursSpent,
        docs,
        setDocs,
        Edit,
        editModeItem,
        setEditModeItem,
        Delete,
        Create,
        handleFileChange
    };
};
