import style from "./Preloader.module.css";
import { Preloader as PreloaderAnim } from "@/shared/Preloader/Preloader";

export const Preloader = () => {
    return (
        <div className={style.preloader}>
            {/* <div className={style.dot} />
            <div className={style.dot} />
            <div className={style.dot} /> */}
            <div className={style.containerAnim}>
            <PreloaderAnim />
            </div>
        
            
        </div>
    );
};
