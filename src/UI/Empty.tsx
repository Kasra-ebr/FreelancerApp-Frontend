import React from 'react';

interface IEmpty {
    height:number,
    width:number
}  
function Empty({ height = 80, width = 80 }:IEmpty) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
        
         THE PROJECT IS EMPTY 
    </div>
  );
}

export default Empty;
