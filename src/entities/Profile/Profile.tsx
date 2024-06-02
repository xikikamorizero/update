"use client";
import style from "./Profile.module.css";
import { baseUrl } from "@/shared/api/const";
import {
    Profile as ProfileIcon,
    Teacher,
    UserOctagon,
    Ranking,
    EmojiSad,
} from "iconsax-react";
import { CardPublication } from "@/shared/CardPublication/CardPublication";
import { DescriptionEditBlok } from "@/shared";
import { Categories } from "@/shared/Categories/Categories";
import { Avatar, Tooltip } from "antd";
import { types } from "@/shared/api";
import { ReactNode, useEffect, useState } from "react";
import { CardProject } from "@/shared";
import Link from "next/link";
import { ImageInput, WrapperEditBlock } from "@/shared";
import {
    Award as AwardType,
    Education,
    Publications,
    Traning,
    TypePortfolio,
} from "@/shared/api/types";
import { TraningTable } from "../TraningTable/TraningTable";
import { observer } from "mobx-react-lite";
import { Award } from "../Award/Award";
import { EducationCard } from "@/shared/EducationCard/EducationCard";
import { BlockPortfolio } from "./BlockPortfolio";
import { WrapperEditBlockNum } from "@/shared/WrapperEditBlock/WrapperEditBlokNum";
import iconNoResult from "./assets/noresult.png";
import { Preloader } from "@/shared/Preloader/Preloader";
import { CardPublicationCreate } from "@/shared/CardPublicationCreate/CardPublicationCreate";

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
    position?: string | null;
    setPosition?: (a: string) => void;
    scienceDegree?: string | null;
    setScienceDegree?: (a: string) => void;
    yearsOfExperience?: number;
    setYearsOfExperience?: (a: number) => void;
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
    myiD?: string;
    loc: string;
    category?: string[] | null;
    setCategory?: (a: string[]) => void;

    publication?: Publications[];
    traning?: Traning[];
    awards?: AwardType[];
    education?: Education[];
    typesPortfolio?: TypePortfolio[];

    subscribers: string;
    no_subscribers: string;
    subscriptions: string;
    no_subscriptions: string;
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

    staj?: string;
    add_staj?: string;
    positionT?: string;
    add_positionT?: string;
    descriptionT?: string;
    contactsT?: string;
    scienceDegreeT?: string;
    create?: string;
    control?: string;
    educationT?: string;
    traningT?: string;
    publicationT?: string;
    awardT?: string;

    titleTable: string;
    dateTable: string;
    locationTable: string;
    organizationTable: string;
    numberOfHoursTable: string;
    docsTable: string;

    adminT?: string;

    logout?: () => void;

    loadingProject: boolean;
    loadingEditProfile: boolean;

    addTitleT?: string;
    addYearT?: string;
    addTypeT?: string;
    addLinkT?: string;
    linkT: string;

    docsT: string;
    add_docsT?: string;
    yearT: string;
};

export const Profile = observer(({ ...props }: PropsType) => {
    const [portfolio, setPortfolio] = useState(true);
    const [editPublication, setEditPublication] = useState(false);
    const [editTraning, setEditTraning] = useState(false);

    console.log(props.typesPortfolio);

    return (
        <div className={style.wrapper}>
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
                        block={
                            <p className={style.userName}>
                                {props.user?.name ? props.user?.name : "null"}
                            </p>
                        }
                    />

                    <WrapperEditBlock
                        value={props.placeOfWork}
                        setValue={props.setPlaceOfWork}
                        placeholder={props.add_placeOfWork}
                        editMode={props.editMode}
                        block={
                            <p className={style.place_of_work}>
                                {props.user?.place_of_work
                                    ? props.user?.place_of_work
                                    : "null"}
                            </p>
                        }
                    />

                    {!props.myProf ? (
                        props.subBlock
                    ) : (
                        <button
                            disabled={props.loadingEditProfile}
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
                            {props.loadingEditProfile ? (
                                <div className={style.preloaderEdit}>
                                    <Preloader />
                                </div>
                            ) : props.editMode ? (
                                props.save
                            ) : (
                                props.edit_profile
                            )}
                        </button>
                    )}

                    <WrapperEditBlock
                        value={props.position}
                        setValue={props.setPosition}
                        placeholder={props.add_positionT}
                        editMode={props.editMode}
                        block={
                            <div className={style.containerItemP}>
                                <h1 className={style.contacts}>
                                    {props.positionT}:
                                </h1>
                                <p className={style.contacts}>
                                    {props.user?.position
                                        ? props.user?.position
                                        : "null"}
                                </p>
                            </div>
                        }
                    />

                    <WrapperEditBlock
                        value={props.scienceDegree}
                        setValue={props.setScienceDegree}
                        placeholder={props.add_scienceDegree}
                        editMode={props.editMode}
                        block={
                            <div className={style.containerItemP}>
                                <h1 className={style.science_degree}>
                                    {props.scienceDegreeT}:
                                </h1>
                                <p className={style.science_degree}>
                                    {props.user?.science_degree
                                        ? props.user?.science_degree
                                        : "null"}
                                </p>
                            </div>
                        }
                    />
                    <WrapperEditBlock
                        value={props.contacts}
                        setValue={props.setContacts}
                        placeholder={props.add_contacts}
                        editMode={props.editMode}
                        block={
                            <div className={style.containerItemP}>
                                <h1 className={style.contacts}>
                                    {props.contactsT}:
                                </h1>
                                <p className={style.contacts}>
                                    {props.user?.contacts
                                        ? props.user?.contacts
                                        : "null"}
                                </p>
                            </div>
                        }
                    />
                    <DescriptionEditBlok
                        value={props.description}
                        setValue={props.setDescription}
                        placeholder={props.add_description}
                        editMode={props.editMode}
                        text={props.user?.description}
                        descriptionT={props.descriptionT}
                    />

                    <WrapperEditBlockNum
                        value={props.yearsOfExperience}
                        setValue={props.setYearsOfExperience}
                        placeholder={props.add_staj}
                        editMode={props.editMode}
                        block={
                            <p className={style.contacts}>
                                {props.staj}: {props.user?.yearsOfExperience} лет
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
                                        <Tooltip title={a.name} placement="top">
                                            <Avatar src={baseUrl + a?.avatar} />
                                        </Tooltip>
                                    </Link>
                                ))
                            ) : (
                                <p>{props.no_subscribers}</p>
                            )}
                        </Avatar.Group>
                    </div>

                    {/*  */}
                    {props.myProf ? (
                        <div className={style.subscribers}>
                            <p>{props.subscriptions}</p>
                            <Avatar.Group
                                maxCount={5}
                                maxStyle={{
                                    userSelect: "none",
                                    color: "#000000",
                                    backgroundColor: "var(--main_color)",
                                }}
                            >
                                {props.user?.subscriptions.length !== 0 ? (
                                    props.user?.subscriptions.map((a, i) => (
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
                                            >
                                                <Avatar
                                                    src={baseUrl + a?.avatar}
                                                />
                                            </Tooltip>
                                        </Link>
                                    ))
                                ) : (
                                    <p>{props.no_subscriptions}</p>
                                )}
                            </Avatar.Group>
                        </div>
                    ) : (
                        <></>
                    )}
                    {/*  */}

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
                    <p className={style.roles}>
                        {props.user?.roles.map((a, i) =>
                            a.value == "User" ? (
                                <div
                                    className={style.iconRole}
                                    title={a.value}
                                    key={i}
                                >
                                    <UserOctagon className={style.iconRole} />
                                </div>
                            ) : a.value == "Professor" ? (
                                <div
                                    className={style.iconRole}
                                    title={a.value}
                                    key={i}
                                >
                                    <Teacher className={style.iconRole} />
                                </div>
                            ) : a.value == "Admin" ? (
                                <div
                                    className={style.iconRole}
                                    title={a.value}
                                    key={i}
                                >
                                    <Ranking className={style.iconRole} />
                                </div>
                            ) : (
                                <div key={i}></div>
                            )
                        )}
                    </p>

                    {props.user?.roles.some((obj) => obj.value == "Admin") &&
                    props.myProf ? (
                        <Link
                            className={style.adminLink}
                            href={`/${props.loc}/adminPanel`}
                        >
                            {props.adminT}
                        </Link>
                    ) : (
                        <></>
                    )}
                </div>
                <div className={style.userDopInfo}>
                    <div className={style.userProject}>
                        <div className={style.userWorkLinks}>
                            <div
                                className={
                                    portfolio ? style.active : style.deactive
                                }
                                onClick={() => {
                                    setPortfolio(true);
                                }}
                            >
                                {props.portfolio_title}
                            </div>
                            <div
                                className={
                                    !portfolio ? style.active : style.deactive
                                }
                                onClick={() => {
                                    setPortfolio(false);
                                }}
                            >
                                {props.course_title}
                            </div>
                        </div>
                        <div className={style.projectWrapper}>
                            {portfolio ? (
                                props.loadingProject ? (
                                    <div className={style.preloaderContainer}>
                                        <div className={style.preloader}>
                                            <Preloader />
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className={style.projectWrapperPort}
                                        style={
                                            props.portfolio &&
                                            props.portfolio.length == 0
                                                ? {
                                                      backgroundImage:
                                                          "url(/noresult.png)",
                                                  }
                                                : {}
                                        }
                                    >
                                        {props.typesPortfolio?.map((a, i) => (
                                            <BlockPortfolio
                                                key={i}
                                                array={props.portfolio?.filter(
                                                    (item) =>
                                                        item.typeId === a.id
                                                )}
                                                loc={props.loc}
                                                title={
                                                    props.loc == "ru"
                                                        ? a.valueRu
                                                        : props.loc == "en"
                                                        ? a.valueEn
                                                        : a.valueUz
                                                }
                                            />
                                        ))}
                                    </div>
                                )
                            ) : props.loadingProject ? (
                                <div className={style.preloaderContainer}>
                                    <div className={style.preloader}>
                                        <Preloader />
                                    </div>
                                </div>
                            ) : (
                                <div
                                    className={style.projectContainer}
                                    style={
                                        props.course && props.course.length == 0
                                            ? {
                                                  backgroundImage:
                                                      "url(/noresult.png)",
                                                  height: "400px",
                                              }
                                            : {}
                                    }
                                >
                                    {props.course?.map((a, i) => (
                                        <CardProject
                                            href={`/${props.loc}/course/${a.id}`}
                                            image={a.image}
                                            title={a.title}
                                            key={i}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {props.myProf &&
                        props.user?.roles.some(
                            (obj) => obj.value == "Professor"
                        ) ? (
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

                    <div className={style.publicationsContainer}>
                        <div className={style.titlePublication}>
                            {props.publicationT}
                        </div>
                        <div
                            className={style.projectWrapper}
                            style={
                                editPublication
                                    ? {
                                          minHeight: "300px",
                                          maxHeight: "450px",
                                          height: "100%",
                                      }
                                    : props.publication &&
                                      props.publication.length == 0
                                    ? {
                                          height: "300px",
                                          backgroundImage: `url(/noresult.png)`,
                                      }
                                    : {
                                          minHeight: "300px",
                                          maxHeight: "450px",
                                          height: "100%",
                                      }
                            }
                        >
                            {props.publication && (
                                <div className={style.projectContainer}>
                                    {props.publication
                                        .slice()
                                        .sort((a, b) => a.id - b.id)
                                        .map((a, i) => (
                                            <CardPublication
                                                id={String(a.id)}
                                                editMode={editPublication}
                                                title={a.title}
                                                type={a.type}
                                                link={a.link}
                                                year={a.year}
                                                docs={a.docs}
                                                addTitleT={props.addTitleT}
                                                addTypeT={props.addTypeT}
                                                addYearT={props.addYearT}
                                                addLinkT={props.addLinkT}
                                                linkT={props.linkT}
                                                key={i}
                                                docsT={props.docsT}
                                                yearT={props.yearT}
                                                add_docsT={props.add_docsT}
                                            />
                                        ))}
                                    {props.myProf && editPublication && (
                                        <CardPublication
                                            key={-1}
                                            id={"-1"}
                                            link={""}
                                            editMode={editPublication}
                                            create={"true"}
                                            addTitleT={props.addTitleT}
                                            addTypeT={props.addTypeT}
                                            addYearT={props.addYearT}
                                            addLinkT={props.addLinkT}
                                            linkT={props.linkT}
                                            docs={null}
                                            docsT={props.docsT}
                                            yearT={props.yearT}
                                            add_docsT={props.add_docsT}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                        {props.myProf && (
                            <div
                                className={style.create}
                                onClick={() => {
                                    setEditPublication(!editPublication);
                                }}
                            >
                                {props.control}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className={style.publicationsContainer}>
                <div className={style.titlePublication}>{props.educationT}</div>
                <div
                    className={style.projectWrapper}
                    style={{ height: "max-content" }}
                >
                    <div className={style.educationContainer}>
                        {props.education?.map((a, i) => (
                            <EducationCard
                                href={`/${props.loc}/education/${a.id}`}
                                id={String(a.id)}
                                title={a.title}
                                year={a.date}
                                key={i}
                            />
                        ))}
                    </div>
                </div>

                {props.myProf && (
                    <Link
                        href={`/${props.loc}/createEducation`}
                        className={style.create}
                    >
                        {props.create}
                    </Link>
                )}
            </div>

            <div className={style.publicationsContainer}>
                <div className={style.titlePublication}>{props.awardT}</div>
                <div
                    className={`${style.projectWrapper} ${style.awardWrapper}`}
                >
                    <div className={style.awardContainer}>
                        {props.awards?.map((a, i) => (
                            <Award
                                title={a.title}
                                year={a.year}
                                href={`/${props.loc}/award/${a.id}`}
                                key={i}
                            />
                        ))}
                    </div>
                </div>
                {props.myProf && (
                    <Link
                        href={`/${props.loc}/createAward`}
                        className={style.create}
                    >
                        {props.create}
                    </Link>
                )}
            </div>

            <div className={style.publicationsContainer}>
                <div className={style.titlePublication}>{props.traningT}</div>
                <div
                    className={style.projectWrapper}
                    style={{ height: "max-content" }}
                >
                    <TraningTable
                        editMode={editTraning}
                        traning={props.traning}
                        titleTable={props.titleTable}
                        dateTable={props.dateTable}
                        locationTable={props.locationTable}
                        organizationTable={props.organizationTable}
                        numberOfHoursTable={props.numberOfHoursTable}
                        docsTable={props.docsTable}
                    />
                </div>
                {props.myProf && (
                    <div
                        className={style.create}
                        onClick={() => {
                            setEditTraning(!editTraning);
                        }}
                    >
                        {props.control}
                    </div>
                )}
            </div>
        </div>
    );
});
