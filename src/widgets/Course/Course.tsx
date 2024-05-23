"use client";
import style from "./Course.module.css";
import { Row, Col } from "antd";
import { useCourse } from "./lib/hook";
import Link from "next/link";
import { Card } from "@/shared";
import { observer } from "mobx-react-lite";
import { AccessDenied } from "@/shared";
import { Preloader } from "@/shared/Preloader/Preloader";

type PropsType = {
    courseId: string;
    loc: string;
    description: string;
    create: string;
    accessdenied: string;
    level: string;
    category: string;
    save: string;
    delete: string;
    edit: string;
};

export const Course = observer(({ ...props }: PropsType) => {
    const large = { span: 6 };
    const middle = { span: 8 };
    const small = { span: 12 };
    const xsmall = { span: 12 };
    const data = useCourse({
        courseId: props.courseId,
        loc: props.loc,
    });

    if (data.error) {
        return <AccessDenied text={props.accessdenied} />;
    }

    return (
        <div className={style.container}>
            {data.contextHolder}
            {data.loading ? (
                <div className={style.preloaderContainer}>
                    <div className={style.preloader}>
                        <Preloader />
                    </div>
                </div>
            ) : (
                <div className={style.container}>
                    {data.editMode ? (
                        <>
                            <input
                                className={style.title}
                                type={"text"}
                                placeholder={""}
                                value={data.title}
                                onChange={(e) => {
                                    data.setTitle(e.target.value);
                                }}
                            />
                            <input
                                className={style.description}
                                type={"text"}
                                placeholder={""}
                                value={data.description}
                                onChange={(e) => {
                                    data.setDescription(e.target.value);
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <p className={style.title}>{data.title}</p>
                            <p className={style.description}>
                                {props.description}: {data.description}
                            </p>
                            <p>{data.course?.lessonCount}</p>
                        </>
                    )}
                    <div className={style.card_container}>
                        <Row gutter={[16, 16]}>
                            {data.course?.lessons
                                ? data.course?.lessons
                                      ?.slice()
                                      .sort((a, b) => a.id - b.id)
                                      .map((a, i) => (
                                          <Col
                                              xs={xsmall}
                                              sm={small}
                                              md={middle}
                                              lg={large}
                                              key={i}
                                          >
                                              <Link
                                                  href={`/${props.loc}/lesson/${a.id}?author=${data.course?.authorId}`}
                                              >
                                                  <Card
                                                      loading={false}
                                                      src={a.image}
                                                      title={a.title}
                                                      subtitle={a.lesson_number}
                                                      proj={"true"}
                                                  />
                                              </Link>
                                          </Col>
                                      ))
                                : null}
                        </Row>
                    </div>
                    {data.editMode ? (
                        <div className={style.infoCourse}>
                            <input
                                className={style.infoText}
                                type={"text"}
                                placeholder={""}
                                value={data.level}
                                onChange={(e) => {
                                    data.setLevel(e.target.value);
                                }}
                            />
                            <input
                                className={style.infoText}
                                type={"text"}
                                placeholder={""}
                                value={data.category}
                                onChange={(e) => {
                                    data.setCategory(e.target.value);
                                }}
                            />
                        </div>
                    ) : (
                        <div className={style.infoCourse}>
                            <p className={style.infoText}>
                                {props.level}: {data.level}
                            </p>
                            <p className={style.infoText}>
                                {props.category}: {data.category}
                            </p>
                        </div>
                    )}

                    {data.profileId == data.course?.authorId ? (
                        <div className={style.buttonContainer}>
                            <Link
                                href={`/${props.loc}/createLesson?course=${props.courseId}`}
                                className={`${style.createLesson} ${style.button}`}
                            >
                                {props.create}
                            </Link>

                            <button
                                disabled={!data.course || data.loading}
                                className={`${style.editButton} ${style.button}`}
                                onClick={() => {
                                    if (data.editMode) {
                                        data.EditCourse();
                                    }
                                    data.setEditMode(!data.editMode);
                                }}
                            >
                                {data.loading ? (
                                    <div className={style.preloadCo}>
                                        <Preloader />
                                    </div>
                                ) : data.editMode ? (
                                    props.save
                                ) : (
                                    props.edit
                                )}
                            </button>

                            <button
                                disabled={!data.course || data.loading}
                                className={`${style.deleteButton} ${style.button}`}
                                onClick={() => {
                                    data.DeleteCourse();
                                }}
                            >
                                {data.loading ? (
                                    <div className={style.preloadCo}>
                                        <Preloader />
                                    </div>
                                ) : (
                                    props.delete
                                )}
                            </button>
                        </div>
                    ) : null}
                </div>
            )}
        </div>
    );
});
