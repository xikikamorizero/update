import style from './DescriptionEditBlok.module.css';
import {ReactNode, memo} from 'react';
type PropsType = {
    editMode?: boolean;
    value?: string | null;
    setValue?: (a: string) => void;
    placeholder?: string;
    block: ReactNode;
};

export const DescriptionEditBlok = memo(({ ...props }: PropsType) => {
    return (
        <>
            {props.editMode ? (
                <textarea
                    className={style.inputTitle}
                    placeholder={props.placeholder}
                    value={props.value ? props.value : ""}
                    onChange={(e) => {
                        if (props.setValue) props.setValue(e.target.value);
                    }}
                />
            ) : (
                props.block
            )}
        </>
    );
});