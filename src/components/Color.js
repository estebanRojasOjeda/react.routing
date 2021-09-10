import React from "react";

const Color = (props) =>{
    return(
        <>
            <div style={{backgroundColor: props.back, width:"100%", minHeight:"100px"}}>
                <h1 style={{color: props.color}}>The word is hello</h1>
            </div>
        </>
    );
}

export default Color;