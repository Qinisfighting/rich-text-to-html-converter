
import { useState, useEffect } from "react";
import React from 'react';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import { Button } from "@/components/ui/button"

interface ConverterProps {
    // Define your component props here
}

const Converter: React.FC<ConverterProps> = () => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );
      const [convertedContent, setConvertedContent] = useState<string | null>(null);
      useEffect(() => {
        const rawContentState = convertToRaw(editorState.getCurrentContent());
        const html = draftToHtml(rawContentState);
        setConvertedContent(html);
      }, [editorState]);

    return (
      
      <div className='w-screen mx-auto px-4 md:px-20 my-20'>
         
                <Editor
                        editorState={editorState}
                        onEditorStateChange={setEditorState}
                        wrapperStyle={{ marginBottom: "2em",fontSize: "calc(10px + 1.5vmin)"}}
                        editorStyle={{padding:"10px 20px", border: "1px solid gray", borderRadius: "0.3em", height:200}}
                        toolbarStyle={{border: "1px solid gray", borderRadius: "0.3em",}}
                    />
                 <div>
                 <Button variant="destructive">SHOW HTML</Button>
                    
                    <div/>
                     {convertedContent}
                    </div>   
        </div>
    );
};

export default Converter;