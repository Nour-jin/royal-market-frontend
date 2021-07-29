
import React from 'react'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
const Tabs = ({ images, onSelect }) =>
{
    const gap = 10;
    const circle = 7;
    const defaults = { transformOrigin: 'center center' };
    const width = 400;
    const height = 400;
    
    const getPosX = (i) => (width / 2) - ((images.length * ((circle * 2) + gap) - gap) / 2) + (i * ((circle * 2) + gap))
    const getPosY = (i) => height - 30
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid slice">
              { (!images ? [] : images).map((image, i) => <circle onClick={() => onSelect(i)} className="border" cx={getPosX(i)} cy={getPosY(i)} r={circle + 2}></circle> )}
        </svg>
    );	
}

export default Tabs