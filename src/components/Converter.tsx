import { useState, useEffect } from "react";
import React from "react";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import { Button } from "@/components/ui/button";
import ClipboardJS from "clipboard";
import copy from "../assets/copy.png";
import { useToast } from "@/components/ui/use-toast";

interface ConverterProps {
  // Define your component props here
}

const Converter: React.FC<ConverterProps> = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState<string | null>(null);
  useEffect(() => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const html = draftToHtml(rawContentState);
    setConvertedContent(html);
  }, [editorState]);
  const [showHTML, setShowHTML] = useState(false);
  const { toast } = useToast();
  new ClipboardJS(".btn");

  return (
    <div className="md:w-1/2 h-full mx-auto px-4 mt-16">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperStyle={{
          marginBottom: "3em",
          fontSize: "calc(10px + 1.5vmin)",
          backgroundColor: "white",
          borderRadius: "7px",
          border: "1px solid gray",
        }}
        editorStyle={{
          padding: "10px 20px",
          borderRadius: "1em",
          minHeight: 300,
        }}
        toolbarStyle={{
          borderBottom: "1px dashed gray",
          borderRadius: "7px 7px 0 0",
        }}
      />
      {!showHTML ? (
        <Button
          className="w-full"
          variant="destructive"
          onClick={() => setShowHTML(true)}
        >
          SHOW HTML
        </Button>
      ) : (
        <Button
          className="w-full"
          variant="destructive"
          onClick={() => window.location.reload()}
        >
          CLEAR ALL
        </Button>
      )}
      {showHTML && (
        <div className="w-full flex flex-col justify-center mx-auto border border-gray-400 rounded-md bg-white mt-16">
          <button className="btn self-end" data-clipboard-target="#html">
            <img
              src={copy}
              className="w-[40px] mt-6 mx-10"
              title="COPY TO CLIPBOARD"
              onClick={() => {
                toast({
                  title: "Yep, content has been copied to the clipboard😉.",
                });
              }}
            ></img>
          </button>
          <div
            id="html"
            className="mb-6 text-justify py-6 px-10 self-start text-l"
          >
            {convertedContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default Converter;
