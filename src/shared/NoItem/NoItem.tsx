import style from "./NoItem.module.css";
import { EmojiSad } from "iconsax-react";

export const NoItem = () => {
    return (
        <div className={style.container}>
            <EmojiSad className={style.icon} />
        </div>
    );
};
