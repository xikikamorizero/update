"use client";
import style from "./Profile.module.css";
import { baseUrl } from "@/shared/api/const";
import { Profile as ProfileIcon } from "iconsax-react";
import { Categories } from "@/shared";
import { Avatar, Tooltip } from "antd";
import { types } from "@/shared/api";
import { ReactNode, useState } from "react";
import { CardProject } from "@/shared";
import Link from "next/link";
import { ImageInput, WrapperEditBlock } from "@/shared";

type PropsType = {
    user: types.userType | null;
    myProf: boolean;
    editMode?: boolean;
    setEditMode?: (a: boolean) => void;
    name?: string | null;
    setName?: (a: string) => void;
    description?: string | null;
    setDescription?: (a: string) => void;
    placeOfWork?: string | null;
    setPlaceOfWork?: (a: string) => void;
    scienceDegree?: string | null;
    setScienceDegree?: (a: string) => void;
    contacts?: string | null;
    setContacts?: (a: string) => void;
    image?: File | null;
    setImage?: (a: File | null) => void;
    isLiked?: boolean;
    isDisliked?: boolean;
    isSubscribe?: boolean;
    portfolio?: types.PortfolioType[];
    course?: types.CourseType[];
    EditProfile?: () => void;
    subBlock?: ReactNode;
    likeBlock?: ReactNode;
    myiD?: number;
    loc:string;
};

export const Profile = ({ ...props }: PropsType) => {
    const [portfolio, setPortfolio] = useState(true);
    return (
        <div className={style.container}>
            <div className={style.userInfo}>
                <div className={style.avatarContainer}>
                    {props.editMode ? (
                        <ImageInput
                            setImage={props.setImage}
                            image={props.image}
                        />
                    ) : props.user?.avatar ? (
                        <img
                            className={style.avatar}
                            draggable={false}
                            alt={"avatar"}
                            src={baseUrl + props.user?.avatar}
                        />
                    ) : (
                        <ProfileIcon size={"100%"} />
                    )}
                </div>
                {props.likeBlock}
                <WrapperEditBlock
                    value={props.name}
                    setValue={props.setName}
                    placeholder={"add name"}
                    editMode={props.editMode}
                    block={<p className={style.userName}>{props.user?.name}</p>}
                />

                <WrapperEditBlock
                    value={props.placeOfWork}
                    setValue={props.setPlaceOfWork}
                    placeholder={"add place of work"}
                    editMode={props.editMode}
                    block={
                        <p className={style.place_of_work}>
                            {props.user?.place_of_work}
                        </p>
                    }
                />

                {!props.myProf ? (
                    props.subBlock
                ) : (
                    <div
                        className={style.sub_func}
                        onClick={() => {
                            if (props.setEditMode) {
                                props.setEditMode(!props.editMode);
                            }
                            if (props.editMode && props.EditProfile) {
                                props.EditProfile();
                            }
                        }}
                    >
                        {props.editMode ? "Save" : "Edit profile"}
                    </div>
                )}

                <WrapperEditBlock
                    value={props.scienceDegree}
                    setValue={props.setScienceDegree}
                    placeholder={"add science degree"}
                    editMode={props.editMode}
                    block={
                        <p className={style.science_degree}>
                            {props.user?.science_degree}
                        </p>
                    }
                />
                <WrapperEditBlock
                    value={props.contacts}
                    setValue={props.setContacts}
                    placeholder={"add contacts"}
                    editMode={props.editMode}
                    block={
                        <p className={style.contacts}>{props.user?.contacts}</p>
                    }
                />

                <Categories categories={props.user?.categories} />

                <div className={style.subscribers}>
                    <p>subscribers:</p>
                    <Avatar.Group
                        maxCount={5}
                        maxStyle={{
                            userSelect: "none",
                            color: "#000000",
                            backgroundColor: "var(--main_color)",
                        }}
                    >
                        {props.user?.subscribers.length !== 0 ? (
                            props.user?.subscribers.map((a, i) => (
                                <Link
                                    href={
                                        props.myiD == a.id
                                            ? `/${props.loc}/profile`
                                            : `/${props.loc}/users/${a.id}`
                                    }
                                    style={{ borderRadius: "50%" }}
                                >
                                    <Tooltip
                                        title={a.name}
                                        placement="top"
                                        key={i}
                                    >
                                        <Avatar src={baseUrl + a?.avatar} />
                                    </Tooltip>
                                </Link>
                            ))
                        ) : (
                            <p>no subscribers</p>
                        )}
                    </Avatar.Group>
                </div>
            </div>
            <div className={style.userProject}>
                <div className={style.userWorkLinks}>
                    <div
                        className={portfolio ? style.active : ""}
                        onClick={() => {
                            setPortfolio(true);
                        }}
                    >
                        Portfolio
                    </div>
                    <div
                        className={!portfolio ? style.active : ""}
                        onClick={() => {
                            setPortfolio(false);
                        }}
                    >
                        Course
                    </div>
                </div>
                <div className={style.projectWrapper}>
                    <div className={style.projectContainer}>
                        {portfolio
                            ? props.portfolio?.map((a, i) => (
                                  <CardProject
                                      href={`/${props.loc}/portfolio/${a.id}`}
                                      image={a.image}
                                      title={a.title}
                                      key={i}
                                  />
                              ))
                            : props.course?.map((a, i) => (
                                  <CardProject
                                      href={`/${props.loc}/course/${a.id}`}
                                      image={a.image}
                                      title={a.title}
                                      key={i}
                                  />
                              ))}
                    </div>
                </div>

                {props.myProf ? (
                    <Link
                        href={portfolio ? `/${props.loc}/createPortfolio` : `/${props.loc}/createCourse`}
                        className={style.create}
                    >
                        {portfolio ? "Create Project" : "Create Course"}
                    </Link>
                ) : null}
            </div>
        </div>
    );
};
