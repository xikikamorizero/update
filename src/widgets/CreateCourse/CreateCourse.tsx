"use client";
import { ChangeEvent } from "react";
import style from "./CreateCourse.module.css";
import { useCourse } from "./lib/hook";

type PropsType = {
    loc: string;
    add_title:string;
    add_description:string;
    add_level:string;
    add_category:string;
    add_image:string;
    create:string;
};

export const CreateCourse = ({ ...props }: PropsType) => {
    const {
        CreateCourse,
        loading,
        title,
        setTitle,
        description,
        setDescription,
        level,
        setLevel,
        category,
        setCategory,
        uploadedImages,
        setUploadedImages,
    } = useCourse({ loc: props.loc });

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setUploadedImages(e.target.files[0]);
        }
    };

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <input
                    className={style.inputText}
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    type={"text"}
                    placeholder={props.add_title}
                />
                <input
                    className={style.inputText}
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    type={"text"}
                    placeholder={props.add_description}
                />
                <input
                    className={style.inputText}
                    value={level}
                    onChange={(e) => {
                        setLevel(e.target.value);
                    }}
                    type={"text"}
                    placeholder={props.add_level}
                />
                <input
                    className={style.inputText}
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                    }}
                    type={"text"}
                    placeholder={props.add_category}
                />
                <input
                    type={"file"}
                    accept="image/*"
                    onChange={handleImageChange}
                    placeholder={props.add_image}
                    id={"imageinput"}
                    style={{ display: "none" }}
                />
                <label
                    className={style.inputImage}
                    htmlFor={"imageinput"}
                    style={{
                        backgroundImage: `url(${
                            uploadedImages
                                ? URL.createObjectURL(uploadedImages)
                                : "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
                        })`,
                    }}
                />
                <button
                    disabled={loading}
                    className={style.buttonCreate}
                    onClick={() => {
                        CreateCourse();
                    }}
                >
                    {props.create}
                </button>
            </div>
        </div>
    );
};
