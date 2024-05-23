"use client";
import { useState } from "react";
import style from "./Portfolio.module.css";
import { Row, Col, Pagination } from "antd";
import { usePortfolio } from "./lib/hook";
import { observer } from "mobx-react-lite";
import { Card } from "@/shared";
import { useContext } from "react";
import { Context } from "./lib/context";
import Link from "next/link";
import { InputFilter } from "@/entities/InputFilter/InputFilter";
import {
    SearchNormal1,
    FilterSquare,
    ArrowSquareDown,
    ArrowSquareUp,
} from "iconsax-react";
import { NoItem } from "@/shared/NoItem/NoItem";
import { Preloader } from "@/shared/Preloader/Preloader";

type PropsType = {
    loc: string;
    title: string;
    type: string;
    category: string;
    keyword: string;
};

export const Portfolio = observer(({ ...props }: PropsType) => {
    const large = { span: 6 };
    const middle = { span: 8 };
    const small = { span: 12 };
    const xsmall = { span: 12 };
    const data = usePortfolio();
    const [filter, setFilter] = useState(false);

    const { store } = useContext(Context);

    return (
        <div className={style.container}>
            <div className={style.filterContainer}>
                <p className={style.title}>{props.title}</p>

                <div className={style.filterSortContainer}>
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
                            value={data.category}
                            setValue={data.setCategory}
                            placeholder={props.category}
                        />

                        <select
                            className={style.selectC}
                            value={data.type}
                            onChange={(e) => {
                                data.setType(e.target.value);
                            }}
                        >
                            {data.loadingT ? (
                                <div>Loading...</div>
                            ) : (
                                data.types.map((a, i) => (
                                    <option value={a.id} key={i}>
                                        {props.loc == "ru"
                                            ? a.valueRu
                                            : props.loc == "en"
                                            ? a.valueEn
                                            : a.valueUz}
                                    </option>
                                ))
                            )}
                            <option value={""}>{props.type}</option>
                        </select>
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
                        {data.portfolio.length > 0 ? (
                            data.portfolio?.map((a, i) => (
                                <Col
                                    xs={xsmall}
                                    sm={small}
                                    md={middle}
                                    lg={large}
                                    key={i}
                                >
                                    <Link
                                        href={`/${props.loc}/portfolio/${a.id}`}
                                    >
                                        <Card
                                            loading={false}
                                            src={a.image}
                                            title={a.title}
                                            subtitle={a.category}
                                            proj={"true"}
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
