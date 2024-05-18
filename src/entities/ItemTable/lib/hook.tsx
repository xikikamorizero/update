"use client";
import { Context as GlobalContext } from "@/shared/api";
import { useContext, useEffect, useState } from "react";
import { notification } from "antd";

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
    editModeItem: string;
    setEditModeItem: (a: number) => void;
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

    const [loading, setLoading] = useState(false);

    // const [editModeItem, setEditModeItem] = useState(false);

    const handleFileChange = (event: any) => {
        setDocs(event.target.files[0]);
    };

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (status: number, description: string) => {
        api["error"]({
            message: status,
            description: description,
        });
    };

    useEffect(() => {
        if (!props.editMode) {
            props.setEditModeItem(-1);
        }
    }, [props.editMode]);

    function Edit() {
        if (!loading) {
            setLoading(true);
            global_store.store.UpdatePort.editTraning(
                { id: props.id },
                {
                    title: title.trim() ? title : "null",
                    date: date.trim() ? date : "null",
                    location: location.trim() ? location : "null",
                    docs,
                    organization: organization.trim() ? organization : "null",
                    hoursSpent: String(hoursSpent),
                }
            )
                .then((response) => {
                    global_store.store.updateProfile();
                    props.setEditModeItem(-1);
                })
                .catch((error) => {
                    openNotificationWithIcon(
                        error.request.status,
                        "Error when changing a professional development record"
                    );
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    function Create() {
        if (!loading) {
            setLoading(true);
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
                    openNotificationWithIcon(
                        error.request.status,
                        "Error creating professional development record"
                    );
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    function Delete() {
        if (!loading) {
            setLoading(true);
            global_store.store.UpdatePort.deleteTraning({
                id: props.id,
            })
                .then((response) => {
                    global_store.store.updateProfile();
                })
                .catch((error) => {
                    openNotificationWithIcon(
                        error.request.status,
                        "Error when deleting a professional development record"
                    );
                })
                .finally(() => {
                    setLoading(false);
                });
        }
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
        Delete,
        Create,
        handleFileChange,
        contextHolder,
        loading,
    };
};
