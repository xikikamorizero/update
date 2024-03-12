"use client";
import style from "./Course.module.css";
import { Row, Col } from "antd";
import { useCourse } from "./lib/hook";
import Link from "next/link";
import { Card } from "@/shared";
import { observer } from "mobx-react-lite";
import { AccessDenied } from "@/shared";

type PropsType = {
    courseId: string;
    loc: string;
    description: string;
    create: string;
    accessdenied: string;
};

export const Course = observer(({ ...props }: PropsType) => {
    const large = { span: 6 };
    const middle = { span: 8 };
    const small = { span: 12 };
    const xsmall = { span: 12 };
    const { course, profileId, error } = useCourse({
        courseId: props.courseId,
    });

    if (error) {
        return <AccessDenied text={props.accessdenied} />;
    }
    return (
        <div className={style.container}>
            <p className={style.title}>{course?.title}</p>
            <p className={style.description}>
                {props.description}: {course?.description}
            </p>
            <div className={style.card_container}>
                <Row gutter={[16, 16]}>
                    {course?.lessons
                        ? course?.lessons.map((a, i) => (
                              <Col
                                  xs={xsmall}
                                  sm={small}
                                  md={middle}
                                  lg={large}
                                  key={i}
                              >
                                  <Link
                                      href={`/${props.loc}/lesson/${a.id}?author=${course?.authorId}`}
                                  >
                                      <Card
                                          loading={false}
                                          src={a.image}
                                          title={a.title}
                                      />
                                  </Link>
                              </Col>
                          ))
                        : null}
                </Row>
            </div>
            {profileId == course?.authorId ? (
                <Link
                    href={`/${props.loc}/createLesson?course=${props.courseId}`}
                    className={style.create_lesson}
                >
                    {props.create}
                </Link>
            ) : null}
        </div>
    );
});
