import React, {  useRef, useEffect } from "react";
import JoditEditor from "jodit-react";

const Editor = ({content , setContent}) => {
  const editor = useRef(null);
  

 useEffect(() => {
    console.log(content);
 } , [content])


  const config = {
    readonly: false, 
    height : 500,
    allowResizeY: false
  };
  return (
    <div className="mt-5">
      <JoditEditor
        ref={editor}
        
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      
      />
    </div>
  );
};

export default Editor;
