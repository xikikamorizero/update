"use client";
import style from "./EditPortfolio.module.css";
import { WithWrapper } from "@/features/hoc/authRedirect";
import React, { useEffect, useRef, useState } from "react";
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
import axios from "axios";

export const EditPortfolio = () => {
    const [data, setData] = useState("");
    console.log(data);
    // axios.get('http://localhost:5000/users').then((res)=>{console.log(res)})
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {/* <MarkdownEditorComponent /> */}
                {/* <Editor
                    onChange={setData}
                    initialContent={data}
                    editable={true}
                /> */}
                {/* <EditorPage /> */}
                <WithWrapper>
                    <EditorJs />
                </WithWrapper>
            </div>
        </div>
    );
};

// const MarkdownEditorComponent = () => {
//     const [markdown, setMarkdown] = useState("");

//     const handleEditorChange = ({ text }: any) => {
//         setMarkdown(text);
//     };

//     return (
//         <div>
//             <MdEditor
//                 value={markdown}
//                 onChange={handleEditorChange}
//                 style={{ height: "500px" }}
//                 renderHTML={(text) => <Markdown>{text}</Markdown>}
//             />
//             <div>
//                 <h2>Preview</h2>
//                 <Markdown>{markdown}</Markdown>
//             </div>
//         </div>
//     );
// };

// interface EditorProps {
//     onChange: (value: string) => void;
//     initialContent?: string;
//     editable?: boolean;
// }

// const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
//     const editor: BlockNoteEditor = useBlockNote({
//         editable,
//         initialContent: initialContent
//             ? (JSON.parse(initialContent) as any[])
//             : undefined,
//         onEditorContentChange: (editor: any) => {
//             onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
//         },
//     });

//     const renderMath = (text: string) => {
//         try {
//             return katex.renderToString(text, { throwOnError: false });
//         } catch (error) {
//             console.error("Error rendering math:", error);
//             return text;
//         }
//     };
//     return (
//         <div>
//             <BlockNoteView editor={editor} theme={"light"} />
//         </div>
//     );
// };
//
// const EditorPage = () => {
//     const [content, setContent] = useState("");

//     const handleChange = (value: any) => {
//         setContent(value);
//     };

//     return (
//         <div>
//             <h1>Редактор Quill в Next.js</h1>
//             <ReactQuill theme="snow" value={content} onChange={handleChange} />
//             <div>
//                 <h2>Превью содержимого:</h2>
//                 <div dangerouslySetInnerHTML={{ __html: content }} />
//             </div>
//         </div>
//     );
// };

const EditorJs = () => {
    const [editorData, setEditorData] = useState("");
    const ejInstance = useRef();
    console.log(editorData);
    const initEditor = () => {
        const editor = new EditorJS({
            holder: "editorjs",
            onReady: () => {
                ejInstance.current = editor;
            },
            autofocus: true,
            data: editorData,
            onChange: async () => {
                let content = await editor.saver.save();
                setEditorData(JSON.stringify(content));
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
    };

    useEffect(() => {
        if (ejInstance.current === null) {
            initEditor();
        }

        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
        };
    }, []);

    return (
        <>
            <div
                id="editorjs"
                style={{
                    width: "100%",
                    padding: "10px 20px 10px 20px",
                }}
            ></div>
        </>
    );
};
