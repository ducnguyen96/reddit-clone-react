// import react, react-markdown-editor-lite, and a markdown parser you like
import { css, Global, useTheme } from "@emotion/react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
  console.log(html);
}

export const MyEditor = (props) => {
  const theme = useTheme();
  // @ts-ignore
  const mode = theme.palette.mode;
  const bgColor = mode == "light" ? "#fff" : "#252526";
  const color = mode == "light" ? "black" : "#d7dadc";
  return (
    <>
      <Global
        styles={css`
          .rc-md-editor {
            height: 500px;
          }
          .editor-container textarea {
            color: ${color} !important;
            background-color: ${bgColor} !important;
          }
          .editor-container > .section.sec-html {
            color: ${color} !important;
            background-color: ${bgColor} !important;
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
