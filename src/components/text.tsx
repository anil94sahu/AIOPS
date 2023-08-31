import React from "react";

type TextPropsTypes = {
  type: "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "SPAN" | "LABEL" | "LEGEND" | "PARAGRAPH";
  className?: string;
  text: string | React.ReactNode;
};

const Text = (props: TextPropsTypes) => {
  return (
    <>
      {props.type === "H1" && <h1 className={props.className}>{props.text}</h1>}
      {props.type === "H2" && <h2 className={props.className}>{props.text}</h2>}
      {props.type === "H3" && <h3 className={props.className}>{props.text}</h3>}
      {props.type === "H4" && <h4 className={props.className}>{props.text}</h4>}
      {props.type === "H5" && <h5 className={props.className}>{props.text}</h5>}
      {props.type === "H6" && <h6 className={props.className}>{props.text}</h6>}
      {props.type === "SPAN" && <span className={props.className}>{props.text}</span>}
      {props.type === "LABEL" && <label className={props.className}>{props.text}</label>}
      {props.type === "LEGEND" && <legend className={props.className}>{props.text}</legend>}
      {props.type === "PARAGRAPH" && <p className={props.className}>{props.text}</p>}
    </>
  );
};

export default Text;
