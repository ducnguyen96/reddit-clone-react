// @ts-nocheck
// import react, react-markdown-editor-lite, and a markdown parser you like
import { css, Global, useTheme } from "@emotion/react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
export const mdParser = new MarkdownIt({ xhtmlOut: true, linkify: true });

// Finish!
// function handleEditorChange({ html, text }) {
//   console.log(html);
// }

export type MyEditorProps = {
  setContent: React.Dispatch<React.SetStateAction<string>>;
  height?: number;
};

export const MyEditor = (props: MyEditorProps) => {
  const theme = useTheme();
  // @ts-ignore
  const mode = theme.palette.mode;
  const bgColor = mode == "light" ? "#fff" : "#252526";
  const color = mode == "light" ? "black" : "#d7dadc";

  function handleEditorChange({ html, text }) {
    props.setContent(text);
  }

  return (
    <>
      <Global
        styles={css`
          .rc-md-editor {
            height: ${props.height ? props.height : 350}px;
            margin: 1rem;
            padding-bottom: 0px !important;
            border: 1px solid #969696 !important;
          }
          .editor-container > section.section.sec-md > textarea {
            color: ${color} !important;
            background-color: ${bgColor} !important;
          }
          .editor-container > .section.sec-html {
            background-color: ${bgColor} !important;
          }

          .custom-html-style {
            color: ${color} !important;
          }
          .rc-md-navigation {
            background: ${bgColor} !important;
          }
        `}
      />
      <MdEditor
        // style={{ height: "500px" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
    </>
  );
};
