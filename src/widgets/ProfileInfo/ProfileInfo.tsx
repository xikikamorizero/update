"use client";
import { Profile } from "@/entities/Profile/Profile";
import style from "./ProfileInfo.module.css";
import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { useProject } from "./lib/hook";
import { LikeDisLike } from "../LikeDisLike/LikeDisLike";

type PropsType = {
    likedislikeC?: ReactNode;
    loc: string;
};

export const ProfileInfo = observer(({ likedislikeC, loc }: PropsType) => {
    const data = useProject();
    return (
        <div className={style.container}>
            <Profile
                loc={loc}
                user={data.profile}
                editMode={data.editMode}
                setEditMode={data.setEditMode}
                name={data.name}
                setName={data.setName}
                description={data.description}
                setDescription={data.setDescription}
                placeOfWork={data.placeOfWork}
                setPlaceOfWork={data.setPlaceOfWork}
                scienceDegree={data.scienceDegree}
                setScienceDegree={data.setScienceDegree}
                contacts={data.contacts}
                setContacts={data.setContacts}
                image={data.image}
                setImage={data.setImage}
                portfolio={data.portfolio}
                course={data.course}
                myProf={true}
                EditProfile={data.EditProfile}
                likeBlock={
                    <LikeDisLike
                        likes={data.profile?.likes}
                        dislikes={data.profile?.dislikes}
                        disabled={true}
                    />
                }
            />
        </div>
    );
});
