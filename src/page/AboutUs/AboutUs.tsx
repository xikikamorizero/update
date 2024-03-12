import styled from "../AboutUs/AboutUs.module.css";
import { WithWrapper } from "@/features/hoc/authRedirect";

type PropsType = {
    title_1: string;
    text_1: string;
    title_2: string;
    text_2: string;
    title_3: string;
    text_3: string;
    title_4: string;
    text_4: string;
};

export const AboutUs = ({ ...props }: PropsType) => {
    return (
        <div className={styled.container}>
            <WithWrapper>
            <div className={styled.aboutUs}>
                <Block title={props.title_1} text={props.text_1} />
                <Block title={props.title_2} text={props.text_2} />
                <Block title={props.title_3} text={props.text_3} />
                <Block title={props.title_4} text={props.text_4} />
            </div>
            </WithWrapper>
        </div>
    );
};
type Props={
    title:string;
    text:string;
}

const Block = ({ title, text }: Props) => {
    return (
        <div className={styled.containerInfo}>
            <div className={styled.title}>{title}</div>
            <div className={styled.text}>{text}</div>
        </div>
    );
};
