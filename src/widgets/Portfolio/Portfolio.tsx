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
import { SearchNormal1, FilterSquare } from "iconsax-react";

type PropsType = {
    loc: string;
    title: string;
    type: string;
    category: string;
    keyword: string;
};

export const Portfolio = observer(({...props}:PropsType) => {
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
                <div className={style.filterPanel}>
                    <div className={style.secondaryFilterContainer}>
                        <InputFilter
                            value={data.category}
                            setValue={data.setCategory}
                            placeholder={props.category}
                        />
                        <InputFilter
                            value={data.type}
                            setValue={data.setType}
                            placeholder={props.type}
                        />
                    </div>

                    <div className={style.inputSearchContainer}>
                        <InputFilter
                            type={"search"}
                            value={data.keyword}
                            setValue={data.setKeyword}
                            placeholder={props.keyword}
                        />
                        <SearchNormal1 className={style.iconSearch} />
                    </div>
                    <FilterSquare
                        className={style.filterButton}
                        onClick={() => {
                            setFilter(!filter);
                        }}
                    />
                </div>
            </div>

            <Row gutter={[16, 16]}>
                {data.portfolio?.map((a, i) => (
                    <Col xs={xsmall} sm={small} md={middle} lg={large} key={i}>
                        <Link href={`/${props.loc}/portfolio/${a.id}`}>
                            <Card
                                loading={false}
                                src={a.image}
                                title={a.title}
                                subtitle={a.category}
                            />
                        </Link>
                    </Col>
                ))}
            </Row>
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
