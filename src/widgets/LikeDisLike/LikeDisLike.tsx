import style from "./LikeDisLike.module.css";
import { useLikeDisLike } from "./lib/hook";
import { Like1, Dislike } from "iconsax-react";

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
            <button
                disabled={data.loading}
                className={`${style.likeAndDis} ${style.like} ${
                    props.isLiked ? style.likeAndDisActive : null
                }`}
                onClick={data.Like}
            >
                {/* <div></div> */}
                <Like1 className={style.likeDisIco} />
                <p>{props.likes}</p>
            </button>
            <button
                disabled={data.loading}
                onClick={data.DisLike}
                className={`${style.likeAndDis} ${style.dislike} ${
                    props.isDisliked ? style.likeAndDisActive : null
                }`}
            >
                {/* <div></div> */}
                <Dislike className={style.likeDisIco} />
                <p>{props.dislikes}</p>
            </button>
        </div>
    );
};
