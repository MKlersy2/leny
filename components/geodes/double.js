import React from "react";
import carouselHorizontal from "../../styles/components/carouselHorizontal.module.css";


function Double() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="66"
      height="137"
      viewBox="0 0 66 137"
    className={carouselHorizontal.geode}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="square"
        strokeWidth="1"
      >
        <g stroke="#D8D8D8" transform="translate(1.5 1.5)">
          <path
            strokeWidth="2"
            d="M31.5363243 57.0657298L31.5363243 78.9701839 63.0726487 134"
            transform="matrix(-1 0 0 1 94.609 0)"
          ></path>
          <path
            strokeWidth="2"
            d="M31.5363243 0L31.5363243 21.9044542 63.0726487 76.9342702"
            transform="rotate(180 47.304 38.467)"
          ></path>
          <path
            strokeWidth="2"
            d="M1.13686838e-13 1.13686838e-13L1.13686838e-13 21.9044542 31.5363243 76.9342702"
            transform="matrix(1 0 0 -1 0 76.934)"
          ></path>
          <path
            strokeWidth="2"
            d="M31.5363243 134L16.519027 86.930268 16.519027 62.2367102 31.5363243 0"
          ></path>
          <path
            strokeWidth="2"
            d="M46.5536216 134L31.5363243 86.930268 31.5363243 62.2367102 46.5536216 0"
            transform="matrix(-1 0 0 1 78.09 0)"
          ></path>
          <path d="M-1.61515321e-16 55L17 62 46.5536216 62 63.0726487 55"></path>
          <path d="M63.0726487 79L47 87 16.519027 87 0 79"></path>
          <path
            strokeWidth="2"
            d="M1.13686838e-13 57.0657298L1.13686838e-13 78.9701839 31.5363243 134"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default Double;