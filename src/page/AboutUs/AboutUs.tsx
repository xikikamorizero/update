import styled from "../AboutUs/AboutUs.module.css";
import { WithWrapper } from "@/features/hoc/authRedirect";

type Props = {
    title?: string;
    text?: string;
};

export const AboutUsPage = () => {
    return (
        <div className={styled.container}>
            <div className={styled.aboutUs}>
                <Block
                    title={"О Нашем Проекте"}
                    text={
                        "VoxMentor - это ваш путеводитель в мире образования и профессионального развития! Наш проект - это инновационная платформа, разработанная для удобства взаимодействия между преподавателями и студентами."
                    }
                />
                <Block
                    title={"Наша Миссия"}
                    text={
                        "Мы стремимся сделать образование доступным и увлекательным для всех. Наша цель - предоставить пространство, где преподаватели могут делиться своим опытом и знаниями, а студенты могут находить интересующие их курсы."
                    }
                />
                <Block
                    title={"О Нашей Платформе"}
                    text={
                        "Сайт voxMentor предоставляет возможность преподавателям зарегистрироваться и разместить свои портфолио, где они могут представить свой опыт и специализацию. Кроме того, преподаватели могут создавать и публиковать курсы по своей области знаний."
                    }
                />
                <Block
                    title={"Присоединяйтесь К Нам!"}
                    text={
                        "Мы рады видеть каждого, кто разделяет наше стремление к образованию и развитию. Присоединяйтесь к voxMentor прямо сейчас, чтобы начать свое образовательное путешествие!"
                    }
                />
            </div>
        </div>
    );
};

export const AboutUs = () => (
    <WithWrapper>
        <AboutUsPage />
    </WithWrapper>
);

const Block = ({ title, text }: Props) => {
    return (
        <div className={styled.containerInfo}>
            <div className={styled.title}>{title}</div>
            <div className={styled.text}>{text}</div>
        </div>
    );
};
