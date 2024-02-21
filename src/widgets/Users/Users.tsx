"use client";
import style from "./Users.module.css";
import { Row, Col, Pagination } from "antd";
import { useUsers } from "./lib/hook";
import { observer } from "mobx-react-lite";
import { Card } from "@/shared";
import { InputFilter } from "@/entities/InputFilter/InputFilter";
import { useContext, useState } from "react";
import { Context } from "./lib/context";
import { SearchNormal1, FilterSquare } from "iconsax-react";
import Link from "next/link";

export const Users = observer(({loc}:{loc:string}) => {
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
                <p className={style.title}>Professor</p>
                <div className={style.filterPanel}>
                    <div className={style.secondaryFilterContainer}>
                        <InputFilter
                            value={data.placeOfWork}
                            setValue={data.setPlaceOfWork}
                            placeholder={"ВуЗ"}
                        />
                        <InputFilter
                            value={data.scienceDegreets}
                            setValue={data.setScienceDegreets}
                            placeholder={"Категория"}
                        />
                    </div>

                    <div className={style.inputSearchContainer}>
                        <InputFilter
                            type={"search"}
                            value={data.keyword}
                            setValue={data.setKeyword}
                            placeholder={"введите имя"}
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
                {data.users?.map((a, i) => (
                    <Col xs={xsmall} sm={small} md={middle} lg={large} key={i}>
                        <Link
                            href={
                                data.myId == a.id
                                    ? `/${loc}/profile`
                                    : `/${loc}/users/${a.id}`
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
