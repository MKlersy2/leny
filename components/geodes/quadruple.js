import React from "react";
import carouselHorizontal from "../../styles/components/carouselHorizontal.module.css";

function Quadruple() {
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
        <g stroke="#FFF" transform="translate(1.5 1.5)">
          <path
            strokeWidth="2"
            d="M31.5363243 57.0657298L31.5363243 78.9701839 48.1382547 122.097402 63.0726487 134"
            transform="matrix(-1 0 0 1 94.609 0)"
          ></path>
          <path
            strokeWidth="2"
            d="M31.5363243 0L31.5363243 21.9044542 48.1382547 65.0316724 63.0726487 76.9342702"
            transform="rotate(180 47.304 38.467)"
          ></path>
          <path
            strokeWidth="2"
            d="M1.13686838e-13 1.13686838e-13L1.13686838e-13 21.9044542 16.6019303 65.0316724 31.5363243 76.9342702"
            transform="matrix(1 0 0 -1 0 76.934)"
          ></path>
          <path
            strokeWidth="2"
            d="M31.5363243 134L24.0572503 121.234465 16.519027 86.930268 16.519027 62.2367102 24.0276757 16.1300755 31.5363243 0"
          ></path>
          <path
            strokeWidth="2"
            d="M46.5536216 134L39.0745476 121.234465 31.5363243 86.930268 31.5363243 62.2367102 39.044973 16.1300755 46.5536216 0"
            transform="matrix(-1 0 0 1 78.09 0)"
          ></path>
          <path d="M-1.61515321e-16 55L17 62 46.5536216 62 63.0726487 55"></path>
          <path d="M63.0726487 79L47 87 16.519027 87 0 79"></path>
          <path
            strokeWidth="2"
            d="M1.13686838e-13 57.0657298L1.13686838e-13 78.9701839 16.6019303 122.097402 31.5363243 134"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default Quadruple;