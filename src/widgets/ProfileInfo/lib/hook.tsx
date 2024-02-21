"use client";
import { Context as GlobalContext } from "@/shared/api";
import { Context } from "./context";
import { useContext, useEffect, useState, useRef } from "react";

type PropsType = {
    portfolioId: string;
};

export const useProject = () => {
    const global_store = useContext(GlobalContext);
    const { store } = useContext(Context);
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState<string | null>("");
    const [description, setDescription] = useState<string | null>("");
    const [placeOfWork, setPlaceOfWork] = useState<string | null>("");
    const [scienceDegree, setScienceDegree] = useState<string | null>("");
    const [contacts, setContacts] = useState<string | null>("");
    const [image, setImage] = useState<File|null>(null);

    useEffect(() => {
        if (global_store.store.profile) {
            setName(global_store.store.profile.name);
            setDescription(global_store.store.profile.description);
            setPlaceOfWork(global_store.store.profile.place_of_work);
            setScienceDegree(global_store.store.profile.science_degree);
            setContacts(global_store.store.profile.contacts);
        }
    }, [global_store.store.profile]);

    function EditProfile() {
        global_store.store.user
            .editProfile({
                name: name,
                description: description,
                place_of_work: placeOfWork,
                science_degree: scienceDegree,
                contacts: contacts
            })
            .then((response) => {
                global_store.store.profile = response.data
            })
            .catch((error) => {
                console.log("Ошибка при EditProfile");
            })
            .finally(() => {});
    }

    useEffect(() => {
        global_store.store.user
            .getMyProject()
            .then((response) => {
                store.portfolio = response.data.portfolio;
                store.course = response.data.course;
            })
            .catch((error) => {
                console.log("");
            })
            .finally(() => {});
    }, []);

    return {
        editMode: editMode,
        setEditMode: setEditMode,
        name: name,
        setName: setName,
        description: description,
        setDescription: setDescription,
        placeOfWork: placeOfWork,
        setPlaceOfWork: setPlaceOfWork,
        scienceDegree: scienceDegree,
        setScienceDegree: setScienceDegree,
        contacts: contacts,
        setContacts: setContacts,
        image:image,
        setImage:setImage,
        profile: global_store.store.profile,
        portfolio: store.portfolio,
        course: store.course,
        EditProfile:EditProfile
    };
};
