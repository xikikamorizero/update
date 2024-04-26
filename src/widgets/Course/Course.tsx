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
    level: string;
    category: string;
    save:string;
    delete:string;
    edit:string;
};

export const Course = observer(({ ...props }: PropsType) => {
    const large = { span: 6 };
    const middle = { span: 8 };
    const small = { span: 12 };
    const xsmall = { span: 12 };
    const data = useCourse({
        courseId: props.courseId,
        loc:props.loc
    });

    if (data.error) {
        return <AccessDenied text={props.accessdenied} />;
    }

    return (
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
                </>
            )}

            <div className={style.card_container}>
                <Row gutter={[16, 16]}>
                    {data.course?.lessons
                        ? data.course?.lessons.map((a, i) => (
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

            <div className={style.buttonContainer}>
                {data.profileId == data.course?.authorId ? (
                    <Link
                        href={`/${props.loc}/createLesson?course=${props.courseId}`}
                        className={style.button}
                    >
                        {props.create}
                    </Link>
                ) : null}

                <button
                    disabled={!data.course}
                    className={`${style.editButton} ${style.button}`}
                    onClick={() => {
                        if (data.editMode) {
                            data.EditCourse();
                        }
                        data.setEditMode(!data.editMode);
                    }}
                >
                    {data.editMode ? props.save : props.edit}
                </button>

                <button
                    disabled={!data.course}
                    className={`${style.deleteButton} ${style.button}`}
                    onClick={() => {
                        data.DeleteCourse();
                    }}
                >
                    {props.delete}
                </button>
            </div>
        </div>
    );
});
