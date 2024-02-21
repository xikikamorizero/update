import style from "./ImageInput.module.css";
import { memo, ChangeEvent } from "react";

type PropsType = {
    image?: File | null;
    setImage?: (a: File | null) => void;
};
export const ImageInput = memo(({ ...props }: PropsType) => {
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0 && props.setImage) {
            props.setImage(e.target.files[0]);
        }
    };
    console.log("ren2043");
    return (
        <div className={style.inputImageContainer}>
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
                        props.image
                            ? URL.createObjectURL(props.image)
                            : "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
                    })`,
                }}
            />
        </div>
    );
});
