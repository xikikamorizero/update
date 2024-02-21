import style from "./LikeDisLike.module.css";
import { useLikeDisLike } from "./lib/hook";

type PropsType = {
    likes?: number;
    dislikes?: number;
    isLiked?: boolean;
    isDisliked?: boolean;
    id?: string;
    disabled?: boolean;
};

export const LikeDisLike = ({ ...props }: PropsType) => {
    const data = useLikeDisLike({
        isLiked: props.isLiked,
        isDisliked: props.isDisliked,
        id: props.id,
        disabled: props.disabled,
    });
    return (
        <div className={style.likesContainer}>
            <div
                className={`${style.likeAndDis} ${style.like} ${
                    props.isLiked ? style.likeAndDisActive : null
                }`}
                onClick={data.Like}
            >
                <div></div>
                <p>{props.likes}</p>
            </div>
            <div
                onClick={data.DisLike}
                className={`${style.likeAndDis} ${style.dislike} ${
                    props.isDisliked ? style.likeAndDisActive : null
                }`}
            >
                <div></div>
                <p>{props.dislikes}</p>
            </div>
        </div>
    );
};
