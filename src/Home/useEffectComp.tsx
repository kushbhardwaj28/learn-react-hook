import { useEffect, useState } from "react";

export const UseEffectComp = () => {
  const [time, updateTime] = useState(new Date());
//   const [bgColor, updateBgColor] = useState("red");

  useEffect(() => {
    // updateTime(new Date());
    const timeoutID = setTimeout(() => {
      updateTime(new Date());
    }, 1000);
    // clearTimeout(timeoutID)
  });


  return (
    <>
      <p
        onClick={() => {
          updateTime(new Date());
        }}
        // style={{ backgroundColor: bgColor }}
      >
        {time.toISOString()}
      </p>
    </>
  );
};
