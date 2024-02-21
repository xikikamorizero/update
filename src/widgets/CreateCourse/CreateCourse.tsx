"use client";
import { ChangeEvent } from "react";
import style from "./CreateCourse.module.css";
import { useCourse } from "./lib/hook";

export const CreateCourse = ({loc}:{loc:string}) => {
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
    } = useCourse({loc});

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
                    placeholder={"add title"}
                />
                <input
                    className={style.inputText}
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    type={"text"}
                    placeholder={"add description"}
                />
                <input
                    className={style.inputText}
                    value={level}
                    onChange={(e) => {
                        setLevel(e.target.value);
                    }}
                    type={"text"}
                    placeholder={"add level"}
                />
                <input
                    className={style.inputText}
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                    }}
                    type={"text"}
                    placeholder={"add category"}
                />
                <input
                    type={"file"}
                    accept="image/*"
                    onChange={handleImageChange}
                    placeholder={"add image"}
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
                        CreateCourse()
                    }}
                >
                    Create
                </button>
            </div>
        </div>
    );
};
