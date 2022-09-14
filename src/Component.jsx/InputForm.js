import React, { useState } from "react";
import './InputForm.css';
const InputForm = (props)=>{
 const { id, errorMessage, onChange, lable, ...inputprops}= props;
 const [focus, setFocus]=useState(false);
 const handleFocus = (e)=>{
    setFocus(true);
 }
    return(
       <div className="InputForm">
          <lable> {lable} </lable>
          <input {...inputprops} onChange={onChange} onBlur={handleFocus}
           focus={focus.toString()}
           onFocus={()=>inputprops.name=== 'ConfirmPassword' && setFocus(true)}
           />
          <span> {errorMessage} </span>
       </div>
    )
}
export default InputForm;