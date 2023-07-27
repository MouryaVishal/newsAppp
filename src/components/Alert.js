import React from "react";

export default function Alert(props) {

    const capitalise=(word)=>{
        let lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
  return (
    <div className=" mt-xxl-5" style={{height:'35px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} h-35 alert-dismissible fade show`} role="alert">
      <strong>{capitalise(props.alert.type)}</strong> {props.alert.msg}
    </div>}
    </div>
  );
}
