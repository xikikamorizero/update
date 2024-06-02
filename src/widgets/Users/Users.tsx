"use client";
import style from "./Users.module.css";
import { Row, Col, Pagination } from "antd";
import { useUsers } from "./lib/hook";
import { observer } from "mobx-react-lite";
import { Card } from "@/shared";
import { InputFilter } from "@/entities/InputFilter/InputFilter";
import { InputFilterNum } from "@/entities/InputFilterNum/InputFilterNum";
import { useContext, useState } from "react";
import { Context } from "./lib/context";
import {
    SearchNormal1,
    FilterSquare,
    ArrowSquareDown,
    ArrowSquareUp,
} from "iconsax-react";
import Link from "next/link";
import { NoItem } from "@/shared/NoItem/NoItem";
import { CategoriesFilter } from "@/shared/CategoriesFilter/CategoriesFilter";
import { Preloader } from "@/shared/Preloader/Preloader";

type PropsType = {
    loc: string;
    title: string;
    type: string;
    scienceDegree: string;
    keyword: string;

    awardT: string;
    publicationT: string;
    stajT: string;
    projectT: string;
    courseT: string;
    categoryT: string;
    from: string;
    to: string;
    likesT: string;
    dislikesT: string;
    createdAtT: string;
};

export const Users = observer(({ ...props }: PropsType) => {
    const large = { span: 6 };
    const middle = { span: 8 };
    const small = { span: 12 };
    const xsmall = { span: 12 };
    const data = useUsers();

    const [filter, setFilter] = useState(false);

    const { store } = useContext(Context);

    return (
        <div className={style.container}>
            <div className={style.filterContainer}>
                <p className={style.title}>{props.title}</p>
                <div className={style.filterSortContainer}>
                    <div className={style.sortSelectContainer}>
                        <select
                            className={style.sortSelect}
                            value={data.sortBy}
                            onChange={(e) => {
                                data.setSortBy(e.target.value);
                            }}
                        >
                            <option value={"createdAt"}>
                                {props.createdAtT}
                            </option>
                            <option value={"likes"}>{props.likesT}</option>
                            <option value={"dislikes"}>
                                {props.dislikesT}
                            </option>
                            <option value={"portfolioCount"}>
                                {props.projectT}
                            </option>
                            <option value={"courseCount"}>
                                {props.courseT}
                            </option>
                            <option value={"publicationsCount"}>
                                {props.publicationT}
                            </option>
                            <option value={"awardsCount"}>
                                {props.awardT}
                            </option>
                            <option value={"yearsOfExperience"}>
                                {props.stajT}
                            </option>
                        </select>
                        {data.sortOrder == "ASC" ? (
                            <ArrowSquareDown
                                className={style.filterButton}
                                onClick={() => {
                                    data.setSortOrder("DESC");
                                }}
                            />
                        ) : (
                            <ArrowSquareUp
                                className={style.filterButton}
                                onClick={() => {
                                    data.setSortOrder("ASC");
                                }}
                            />
                        )}
                    </div>

                    <FilterSquare
                        className={style.filterButton}
                        onClick={() => {
                            setFilter(!filter);
                        }}
                    />
                </div>
            </div>
            {filter && (
                <div className={style.filterPanel}>
                    <div className={style.secondaryFilterContainer}>
                        <InputFilter
                            value={data.placeOfWork}
                            setValue={data.setPlaceOfWork}
                            placeholder={props.type}
                        />
                        <InputFilter
                            width={"170px"}
                            value={data.scienceDegreets}
                            setValue={data.setScienceDegreets}
                            placeholder={props.scienceDegree}
                        />
                    </div>

                    {/*  */}
                    <div className={style.secondaryFilterContainer}>
                        {props.likesT}:
                        <InputFilterNum
                            value={data.likesMin}
                            setValue={data.setLikesMin}
                            placeholder={props.from}
                        />
                        <InputFilterNum
                            value={data.likesMax}
                            setValue={data.setLikesMax}
                            placeholder={props.to}
                        />
                    </div>
                    <div className={style.secondaryFilterContainer}>
                        {props.dislikesT}:
                        <InputFilterNum
                            value={data.dislikesMin}
                            setValue={data.setDisLikesMin}
                            placeholder={props.from}
                        />
                        <InputFilterNum
                            value={data.dislikesMax}
                            setValue={data.setDisLikesMax}
                            placeholder={props.to}
                        />
                    </div>
                    {/*  */}

                    <div className={style.secondaryFilterContainer}>
                        {props.awardT}:
                        <InputFilterNum
                            value={data.awardMin}
                            setValue={data.setAwardMin}
                            placeholder={props.from}
                        />
                        <InputFilterNum
                            value={data.awardMax}
                            setValue={data.setAwardMax}
                            placeholder={props.to}
                        />
                    </div>

                    <div className={style.secondaryFilterContainer}>
                        {props.publicationT}:
                        <InputFilterNum
                            value={data.publicationsMin}
                            setValue={data.setPublicationsMin}
                            placeholder={props.from}
                        />
                        <InputFilterNum
                            value={data.publicationsMax}
                            setValue={data.setPublicationsMax}
                            placeholder={props.to}
                        />
                    </div>

                    <div className={style.secondaryFilterContainer}>
                        {props.stajT}:
                        <InputFilterNum
                            value={data.yearsOfExperienceMin}
                            setValue={data.setYearsOfExperienceMin}
                            placeholder={props.from}
                        />
                        <InputFilterNum
                            value={data.yearsOfExperienceMax}
                            setValue={data.setYearsOfExperienceMax}
                            placeholder={props.to}
                        />
                    </div>

                    <div className={style.secondaryFilterContainer}>
                        {props.projectT}:
                        <InputFilterNum
                            value={data.portfolioMin}
                            setValue={data.setPortfolioMin}
                            placeholder={props.from}
                        />
                        <InputFilterNum
                            value={data.portfolioMax}
                            setValue={data.setPortfolioMax}
                            placeholder={props.to}
                        />
                    </div>

                    <div className={style.secondaryFilterContainer}>
                        {props.courseT}:
                        <InputFilterNum
                            value={data.courseMin}
                            setValue={data.setCourseMin}
                            placeholder={props.from}
                        />
                        <InputFilterNum
                            value={data.courseMax}
                            setValue={data.setCourseMax}
                            placeholder={props.to}
                        />
                    </div>

                    <div className={style.secondaryFilterContainer}>
                        <p>{props.categoryT}: </p>
                        <CategoriesFilter
                            categories={data.categories}
                            setCategories={data.setСategories}
                            editMode={filter}
                        />
                    </div>

                    <div className={style.inputSearchContainer}>
                        <InputFilter
                            type={"search"}
                            value={data.keyword}
                            setValue={data.setKeyword}
                            placeholder={props.keyword}
                            width={"200px"}
                        />
                        <SearchNormal1 className={style.iconSearch} />
                    </div>
                </div>
            )}

            <div className={style.containerCard}>
                {data.loading ? (
                    <div className={style.preloaderContainer}>
                        <div className={style.preloader}>
                            <Preloader />
                        </div>
                    </div>
                ) : (
                    <Row gutter={[16, 16]}>
                        {data.users.length > 0 ? (
                            data.users?.map((a, i) => (
                                <Col
                                    xs={xsmall}
                                    sm={small}
                                    md={middle}
                                    lg={large}
                                    key={i}
                                >
                                    <Link
                                        href={
                                            data.myId == a.id
                                                ? `/${props.loc}/profile`
                                                : `/${props.loc}/users/${a.id}`
                                        }
                                    >
                                        <Card
                                            loading={false}
                                            src={a.avatar}
                                            title={a.name}
                                            subtitle={a.science_degree}
                                        />
                                    </Link>
                                </Col>
                            ))
                        ) : (
                            <NoItem />
                        )}
                    </Row>
                )}
            </div>

            <Pagination
                className={style.pagination}
                defaultCurrent={data.page}
                total={data.pageCount ? data.pageCount * 10 : 0}
                disabled={data.pageCount == null}
                onChange={(e) => {
                    store.page = Number(e);
                }}
            />
        </div>
    );
});
