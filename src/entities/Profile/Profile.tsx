"use client";
import style from "./Profile.module.css";
import { baseUrl } from "@/shared/api/const";
import { Profile as ProfileIcon } from "iconsax-react";
import { DescriptionEditBlok } from "@/shared";
import { Categories } from "@/shared/Categories/Categories";
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
    loc: string;
    category?: string[]|null;
    setCategory?: (a: string[]) => void;

    subscribers: string;
    no_subscribers: string;
    portfolio_title: string;
    course_title: string;
    add_name?: string;
    add_placeOfWork?: string;
    save?: string;
    edit_profile?: string;
    add_scienceDegree?: string;
    add_contacts?: string;
    add_description?: string;
    create_portfolio?: string;
    create_course?: string;
    out?: string;

    logout?: () => void;
};

export const Profile = ({ ...props }: PropsType) => {
    const [portfolio, setPortfolio] = useState(true);

    console.log(props.user?.roles[0].value)

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
                    placeholder={props.add_name}
                    editMode={props.editMode}
                    block={<p className={style.userName}>{props.user?.name}</p>}
                />

                <WrapperEditBlock
                    value={props.placeOfWork}
                    setValue={props.setPlaceOfWork}
                    placeholder={props.add_placeOfWork}
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
                        {props.editMode ? props.save : props.edit_profile}
                    </div>
                )}

                <WrapperEditBlock
                    value={props.scienceDegree}
                    setValue={props.setScienceDegree}
                    placeholder={props.add_scienceDegree}
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
                    placeholder={props.add_contacts}
                    editMode={props.editMode}
                    block={
                        <p className={style.contacts}>{props.user?.contacts}</p>
                    }
                />
                <DescriptionEditBlok
                    value={props.description}
                    setValue={props.setDescription}
                    placeholder={props.add_description}
                    editMode={props.editMode}
                    block={
                        <p className={style.description}>
                            {props.user?.description}
                        </p>
                    }
                />

                <Categories
                    categories={props.category}
                    setCategories={props.setCategory}
                    editMode={props.editMode}
                />

                <div className={style.subscribers}>
                    <p>{props.subscribers}</p>
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
                                    key={i}
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
                            <p>{props.no_subscribers}</p>
                        )}
                    </Avatar.Group>
                </div>

                {props.myProf ? (
                    <div
                        className={style.sub_func}
                        style={{ color: "red" }}
                        onClick={() => {
                            props.logout && props.logout();
                        }}
                    >
                        {props.out}
                    </div>
                ) : (
                    <></>
                )}
                <p className={style.roles}>{props.user?.roles.some(obj=>obj.value=="Professor")?"Professor":"User"}</p>
            </div>
            <div className={style.userProject}>
                <div className={style.userWorkLinks}>
                    <div
                        className={portfolio ? style.active : ""}
                        onClick={() => {
                            setPortfolio(true);
                        }}
                    >
                        {props.portfolio_title}
                    </div>
                    <div
                        className={!portfolio ? style.active : ""}
                        onClick={() => {
                            setPortfolio(false);
                        }}
                    >
                        {props.course_title}
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

                {props.myProf && props.user?.roles.some(obj=>obj.value=="Professor") ? (
                    <Link
                        href={
                            portfolio
                                ? `/${props.loc}/createPortfolio`
                                : `/${props.loc}/createCourse`
                        }
                        className={style.create}
                    >
                        {portfolio
                            ? props.create_portfolio
                            : props.create_course}
                    </Link>
                ) : null}
            </div>
        </div>
    );
};
