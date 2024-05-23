"use client";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import type { UploadFile, UploadProps } from "antd";
import style from './CreateAward.module.css';

type Props = {
    fileList: UploadFile | null;
    setFileList: (value: UploadFile | null) => void;
    add_docs:string;
};

export const DocsUploade = ({ ...props }: Props) => {
    const prop: UploadProps = {
        onRemove: (file) => {
            props.setFileList(file);
        },
        beforeUpload: (file) => {
            props.setFileList(file);

            return false;
        },
        maxCount: 1,
    };

    return (
        <div className={style.uploadContainer}>
            <Upload {...prop}>
                <Button className={style.upload} icon={<UploadOutlined />}>{props.add_docs}</Button>
            </Upload>
        </div>
    );
};