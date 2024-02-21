"use client";
import style from "./Course.module.css";
import { Row, Col } from "antd";
import { useCourse } from "./lib/hook";
import Link from "next/link";
import { Card } from "@/shared";
import { observer } from "mobx-react-lite";

type PropsType = {
    courseId: string;
    loc:string;
};

export const Course = observer(({ courseId,loc }: PropsType) => {
    const large = { span: 6 };
    const middle = { span: 8 };
    const small = { span: 12 };
    const xsmall = { span: 12 };
    const data = useCourse({ courseId });
    return (
        <div className={style.container}>
            <p className={style.title}>{data.course?.title}</p>
            <p className={style.description}>{data.course?.description}</p>
            <div className={style.card_container}>
                <Row gutter={[16, 16]}>
                    {data.course?.lessons.map((a, i) => (
                        <Col
                            xs={xsmall}
                            sm={small}
                            md={middle}
                            lg={large}
                            key={i}
                        >
                            <Link href={`/${loc}/lesson/${a.id}?author=${data.course?.authorId}`}>
                                <Card
                                    loading={false}
                                    src={a.image}
                                    title={a.title}
                                />
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
            <Link href={`/${loc}/createLesson?course=${courseId}`} className={style.create_lesson}>Create Lesson</Link>
        </div>
    );
});
