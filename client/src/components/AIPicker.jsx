import React from "react";
import CustomButtom from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <div className="flex flex-wrap gap-3" >
        {generatingImg ? (
          <CustomButtom type="outline" title="Asking AI..." customStyles={"text-xs"}/>) : (<>

            <CustomButtom type="outline" 
            title="AI Logo"
            handleClick = {()=>handleSubmit('logo')}
            customStyles={'text-xs'}
            />
            <CustomButtom type="filled" 
            title="AI Full"
            handleClick = {()=>handleSubmit('full')}
            customStyles={'text-xs'}
            />
          </>)
        }
      </div>
    </div>
  );
};

export default AIPicker;
