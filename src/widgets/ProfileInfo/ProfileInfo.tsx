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

    add_description:string;
    add_name: string;
    add_placeOfWork: string;
    save: string;
    edit_profile: string;
    add_scienceDegree: string;
    add_contacts: string;
    subscribers: string;
    no_subscribers: string;
    portfolio_title: string;
    course_title: string;
    create_portfolio: string;
    create_course: string;
    out:string;

    staj:string;
    add_staj:string;
    positionT:string;
    add_positionT:string;
    create:string;
    control:string;
    educationT:string;
    traningT:string;
    publicationT:string;
    awardT:string;
    descriptionT:string;
    contactsT: string;
    scienceDegreeT:string;
};

export const ProfileInfo = observer(({ ...props }: PropsType) => {
    const data = useProject();
    return (
        <div className={style.container}>
            <Profile
                loc={props.loc}
                user={data.profile}
                editMode={data.editMode}
                setEditMode={data.setEditMode}
                name={data.name}
                setName={data.setName}
                description={data.description}
                setDescription={data.setDescription}
                placeOfWork={data.placeOfWork}
                position={data.position}
                setPosition={data.setPosition}
                yearsOfExperience={data.yearsOfExperience}
                setYearsOfExperience={data.setYearsOfExperience}
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
                category={data.categories}
                setCategory={data.setСategories}
                
                add_name={props.add_name}
                add_placeOfWork={props.add_placeOfWork}
                save={props.save}
                edit_profile={props.edit_profile}
                add_scienceDegree={props.add_scienceDegree}
                add_contacts={props.add_contacts}
                add_description={props.add_description}
                subscribers={props.subscribers}
                no_subscribers={props.no_subscribers}
                portfolio_title={props.portfolio_title}
                course_title={props.course_title}
                create_portfolio={props.create_portfolio}
                create_course={props.create_course}

                staj={props.staj}
                add_staj={props.add_staj}
                positionT={props.positionT}
                add_positionT={props.add_positionT}
                create={props.create}
                control={props.control}
                educationT={props.educationT}
                traningT={props.traningT}
                publicationT={props.publicationT}
                awardT={props.awardT}
                descriptionT={props.descriptionT}
                contactsT={props.contactsT}
                scienceDegreeT={props.scienceDegreeT}

                out={props.out}
                logout={data.logout}
                publication={data.profile?.publications}
                traning={data.profile?.traning}
                awards={data.profile?.awards}
                education={data.profile?.education}
                
            />
        </div>
    );
});
