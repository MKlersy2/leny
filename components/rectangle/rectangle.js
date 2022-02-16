import React from "react";
import rectangle from '/styles/components/rectangle.module.css';
import { rectangleOpen } from "../../pages/scrollLockScript";

export default function Rectangle() {
    return (


        <svg noclickbutton='true' noclick='true' id='animation-to-hover' width="528px" height="525px" viewBox="0 0 528 525" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
                <pattern id="pattern-38y-6askk7-1" patternUnits="objectBoundingBox" height="104.010899%" width="100%">
                    <use xlinkHref="#image-38y-6askk7-2"></use>
                </pattern>
                <image id="image-38y-6askk7-2" width="528" height="525" xlinkHref="/images/rectangle_momo_background.png"></image>
            </defs>
            <g noclick='true' id="Plan-pricing" stroke="none" strokeWidth="1" fill="none" fillRule="even">
                <polygon noclick='true' id="Rectangle" fill="url(#pattern-38y-6askk7-1)"  points="245 0 528 0 283 525 0 525">
                    <animate id="animation-to-fill" begin="indefinite" attributeName="points" fill="freeze" dur="400ms" to="0 0 528 0 528 525 0 525"/>
                    <animate id="animation-to-tordu" begin="indefinite" attributeName="points" fill="freeze" dur="400ms" to="245 0 528 0 283 525 0 525"/>
                </polygon>
            </g>
        </svg>





    );
}