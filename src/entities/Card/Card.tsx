import style from "./Card.module.css";
import { Card as CardAnt } from "antd";

const { Meta } = CardAnt;

export const Card = () => {
    return (
        <CardAnt
            hoverable
            style={{ width: 240 }}
            cover={
                <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
            }
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </CardAnt>
    );
};
