"use client";
import style from "./EditorJsEdit.module.css";
import "katex/dist/katex.min.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Checklist from "@editorjs/checklist";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import Table from "@editorjs/table";
import InlineCode from "@editorjs/inline-code";
import Marker from "@editorjs/marker";
import Delimiter from "@editorjs/delimiter";
import Raw from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import EJLaTeX from "../../features/module/module";

export const EditorJsEdit = (props) => {
    useEffect(() => {
        const editor = new EditorJS({
            holder: "editorjs",
            onReady: () => {
                editor.render(props.editorData);
                const editorBlocks = document.querySelectorAll(
                    ".codex-editor.codex-editor--empty"
                );
                if (editorBlocks.length > 1) {
                    editorBlocks[1].remove();
                }
            },
            autofocus: true,
            onChange: async () => {
                let content = await editor.saver.save();
                props.setEditorData(JSON.stringify(content));
            },
            tools: {
                header: {
                    class: Header,
                    inlineToolbar: true,
                },
                paragraph: {
                    class: Paragraph,
                    inlineToolbar: true,
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                },
                checklist: Checklist,
                quote: Quote,
                warning: Warning,
                code: Code,
                image: SimpleImage,
                table: Table,
                inlineCode: InlineCode,
                marker: Marker,
                delimiter: Delimiter,
                raw: Raw,
                Math: EJLaTeX,
            },
        });
        return () => {
            if (editor.destroy) {
                editor.destroy();
            }
            if (editor.clear) {
                editor.clear();
            }
        };
    }, []);

    return (
        <>
            <div id="editorjs" className={style.editorJs}></div>
        </>
    );
};
