import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
interface ILoading {
    height:number,
    width:number
}  
function Loading({ height = 80, width = 80 }:ILoading) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ThreeDots 
        height={height}
        width={width}
        radius="8"
        color="rgb(74, 109, 255)" 
        visible={true}
      />
    </div>
  );
}

export default Loading;
