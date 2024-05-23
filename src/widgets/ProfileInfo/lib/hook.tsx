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
    const [name, setName] = useState<string | null>(
        global_store.store.profile?.name ? global_store.store.profile?.name : ""
    );
    const [description, setDescription] = useState<string | null>(
        global_store.store.profile?.description
            ? global_store.store.profile?.description
            : ""
    );
    const [placeOfWork, setPlaceOfWork] = useState<string | null>(
        global_store.store.profile?.place_of_work
            ? global_store.store.profile?.place_of_work
            : ""
    );

    const [position, setPosition] = useState<string | null>(
        global_store.store.profile?.position
            ? global_store.store.profile?.position
            : ""
    );
    const [yearsOfExperience, setYearsOfExperience] = useState<number>(
        global_store.store.profile?.yearsOfExperience
            ? global_store.store.profile?.yearsOfExperience
            : 0
    );

    const [scienceDegree, setScienceDegree] = useState<string | null>(
        global_store.store.profile?.science_degree
            ? global_store.store.profile?.science_degree
            : ""
    );
    const [contacts, setContacts] = useState<string | null>(
        global_store.store.profile?.contacts
            ? global_store.store.profile?.contacts
            : ""
    );
    const [categories, setСategories] = useState<string[] | null>(
        global_store.store.profile?.categories
            ? global_store.store.profile?.categories
            : null
    );
    const [image, setImage] = useState<any | null>(
        global_store.store.profile?.avatar
    );

    function EditProfile() {
        if (!store.loading) {
            store.loading = true;
            global_store.store.user
                .editProfile({
                    name: name?.trim() !== "" ? name : "null",
                    description:
                        description?.trim() !== "" ? description : "null",
                    place_of_work:
                        placeOfWork?.trim() !== "" ? placeOfWork : "null",
                    position: position?.trim() !== "" ? position : "null",
                    yearsOfExperience: String(yearsOfExperience),
                    science_degree:
                        scienceDegree?.trim() !== "" ? scienceDegree : "null",
                    contacts: contacts?.trim() !== "" ? contacts : "null",
                    categories: categories,
                    avatar: image,
                })
                .then((response) => {
                    global_store.store.profile = response.data;
                })
                .catch((error) => {
                    console.log("Ошибка при EditProfile", error);
                })
                .finally(() => {
                    store.loading = false;
                });
        }
    }

    function logout() {
        localStorage.removeItem("token");
        global_store.store.profile = null;
        global_store.store.isAuth = false;
    }

    useEffect(() => {
        // global_store.store.updateProfile();

        if (!store.loadingProject) {
            store.loadingProject = true;
            global_store.store.user
                .getMyProject()
                .then((response) => {
                    store.portfolio = response.data.portfolio;
                    store.course = response.data.course;
                })
                .catch((error) => {
                    console.log("");
                })
                .finally(() => {
                    store.loadingProject = false;
                });
        }

        if (!store.loading) {
            store.loading = true;
            global_store.store.user
                .getProfile()
                .then((response) => {
                    global_store.store.profile = response.data;
                })
                .catch(() => {})
                .then(() => {
                    store.loading = false;
                });
        }
    }, []);

    return {
        editMode,
        setEditMode,
        name,
        setName,
        description,
        setDescription,
        placeOfWork,
        setPlaceOfWork,
        scienceDegree,
        setScienceDegree,
        position,
        setPosition,
        yearsOfExperience,
        setYearsOfExperience,
        contacts,
        setContacts,
        categories,
        setСategories,
        image: image,
        setImage,
        profile: global_store.store.profile,
        portfolio: store.portfolio,
        course: store.course,
        EditProfile,
        logout,
        typesPortfolio: global_store.store.typePortfolio,
        loading: store.loading,
        loadingProject: store.loadingProject,
    };
};
