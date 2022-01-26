import React from "react";
import carouselHorizontal from "../../styles/components/carouselHorizontal.module.css";

function Simple() {
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
        <g stroke="#FFF" transform="translate(1.938 1.5)">
          <path
            strokeWidth="2"
            d="M0.231 0L31.098 69"
            transform="matrix(1 0 0 -1 0 69)"
          ></path>
          <path
            strokeWidth="2"
            d="M31.231 0L62.098 69"
            transform="rotate(180 46.665 34.5)"
          ></path>
          <path
            strokeWidth="2"
            d="M31.0981883 134L15.3300261 77 31.0981883 1.36424205e-12"
          ></path>
          <path
            strokeWidth="2"
            d="M46.8663505 134L31.0981883 76.9342702 46.8663505 1.36424205e-12"
            transform="matrix(-1 0 0 1 77.965 0)"
          ></path>
          <path d="M62.0981883 69.9658016L46.561864 77 15.3300261 77 -1.11261245e-13 69.5119886"></path>
          <path
            strokeWidth="2"
            d="M31.231 69.966L62.098 134"
            transform="matrix(-1 0 0 1 93.329 0)"
          ></path>
          <path strokeWidth="2" d="M0.231 69.966L31.098 134"></path>
        </g>
      </g>
    </svg>
  );
}

export default Simple;