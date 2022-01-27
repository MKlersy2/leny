import React from "react";
import styles from '../../styles/Home.module.css'

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="112"
      height="85"
      viewBox="0 0 112 85"
      className={styles.geode}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="square"
        strokeWidth="1"
      >
        <g stroke="#000000" transform="translate(2 1.424)">
          <path strokeWidth="2" d="M36 18.576L54 81.576"></path>
          <path
            strokeWidth="2"
            d="M54 18.576L72 81.576"
            transform="matrix(-1 0 0 1 126 0)"
          ></path>
          <path d="M54 2.076L54 18.076"></path>
          <path d="M54 19.076L54 81.576"></path>
          <path d="M95.5 19.076L54.5 80.076"></path>
          <path
            d="M53.5 19.076L12.5 80.076"
            transform="matrix(-1 0 0 1 66 0)"
          ></path>
          <path d="M17 2.076L12.5 18.076"></path>
          <path d="M91.5 1.076L95.5 18.076"></path>
          <path
            strokeWidth="2"
            d="M18 1.57640876L36 17.5764088 54 1.57640876"
          ></path>
          <path
            strokeWidth="2"
            d="M54 1.57640876L72 17.5764088 90 1.57640876"
          ></path>
          <path strokeWidth="2" d="M1 18.576L107 18.576"></path>
          <path
            strokeWidth="2"
            d="M108 0L71.111171 0 54 18.5764088 108 82"
            transform="matrix(-1 0 0 1 162 0)"
          ></path>
          <path strokeWidth="2" d="M54 0L17.111171 0 0 18.5764088 54 82"></path>
        </g>
      </g>
    </svg>
  );
}

export default Icon;