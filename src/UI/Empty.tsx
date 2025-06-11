import React from 'react';

interface IEmpty {
    height:number,
    width:number
}  
function Empty({ height, width  }:IEmpty) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
         THE PROJECT IS EMPTY 
    </div>
  );
}

export default Empty;
