import style from "./Categories.module.css";

type PropsType = {
    categories: string[] | null | undefined;
};

export const Categories = ({ ...props }: PropsType) => {
    const colors = generateUniqueColors(
        props.categories?.length ? props.categories?.length : 0
    );
    return (
        <div className={style.container}>
            {props.categories?.map((a, i) => (
                <div
                    className={style.item}
                    style={{ backgroundColor: colors[i] }}
                    key={i}
                >
                    {a}
                </div>
            ))}
        </div>
    );
};

function generateUniqueColors(count: number): string[] {
    const letters = "0123456789ABCDEF";
    const colors: string[] = [];

    while (colors.length < count) {
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        const isSimilarToWhite = isColorSimilarToWhite(color);
        if (!isSimilarToWhite) {
            colors.push(color);
        }
    }

    return colors;
}

function isColorSimilarToWhite(color: string): boolean {
    const whiteThreshold = 128;
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);
    const brightness = (r + g + b) / 3;
    return brightness > whiteThreshold;
}
