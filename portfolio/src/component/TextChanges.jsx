import React, { useEffectEvent } from 'react'
import { useState, useEffect } from 'react'
const TextChanges = () => {
    const texts = [
      "Hi, I'm Rahul Patel",
      "Hi, I'm Rahul Patel",
      "Hi, I'm Rahul Patel",
    ];
    const [currentText, setCurrentText] = useState("");
    const [endValue, setendValue] = useState(true);
    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        const intervalid = setInterval(() => {
            setCurrentText(texts[index].substring(0, endValue));
            if(isForward){
                setendValue((prev) => prev+1);
            } else {
                setendValue((prev) => prev-1);
            }
            if(endValue> texts[index].length+10){
                setIsForward(false);
            }
            if(endValue<2.1){
                setIsForward(true);
                setIndex((prev=>prev&texts.length));
            }
            
        }, 50);
        return ()=> clearInterval(intervalid);

    }, [endValue,isForward,index,texts]);
  return (
    <div className='trasition ease duration-300'>{currentText}
      
    </div>
  )
}

export default TextChanges
