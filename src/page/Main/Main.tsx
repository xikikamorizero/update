import style from "./Main.module.css";
import React from "react";
import { Grammerly, ReceiptText, BookSaved } from "iconsax-react";
import { Slaider } from "@/widgets";
import { SlaiderProject } from "@/widgets/SlaiderProject/SlaiderProject";
import { WithWrapper } from "@/features/hoc/authRedirect";
import { Preloader } from "@/shared/Preloader/Preloader";

type PropsType = {
    title1: string;
    title2: string;
    textLink: string;
    text1: string;
    text2: string;
    text3: string;
    loc: string;
};

export const Main = ({ ...props }: PropsType) => {
    return (
        <div className={style.wrapper}>
            <WithWrapper loc={props.loc}>
                <div className={style.container}>
                    <Slaider
                        title={props.title1}
                        link={`/${props.loc}/users`}
                        textLink={props.textLink}
                    />
                    <SlaiderProject
                        title={props.title2}
                        link={`/${props.loc}/portfolio`}
                        textLink={props.textLink}
                    />
                    <div className={style.bannerContainer}>
                        <div className={style.banner}>
                            <Grammerly className={style.icon} />
                            {props.text1}
                        </div>
                        <div className={style.banner}>
                            <ReceiptText className={style.icon} />
                            {props.text2}
                        </div>
                        <div className={style.banner}>
                            <BookSaved className={style.icon} />
                            {props.text3}
                        </div>
                    </div>
                </div>
            </WithWrapper>
        </div>
    );
};
