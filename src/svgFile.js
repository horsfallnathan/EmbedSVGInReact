import React from "react";

export default function SVGFile(props) {
  const { active } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 38 38"
      enableBackground="new 0 0 38 38"
    >
      <path
        className={`st0 ${active > 1 ? "active" : ""}`}
        d="M31.4 15L19 19l7.6-10.5C28.8 10.1 30.5 12.3 31.4 15z"
      />
      <path
        className={`st0 ${active > 2 ? "active" : ""}`}
        d="M32 19c0 1.4-0.2 2.8-0.6 4L19 19l12.4-4C31.8 16.2 32 17.6 32 19z"
      />
      <path
        className={`st0 ${active > 3 ? "active" : ""}`}
        d="M31.4 23c-0.8 2.6-2.5 4.9-4.7 6.5L19 19 31.4 23z"
      />
      <path
        className={`st0 ${active > 4 ? "active" : ""}`}
        d="M26.6 29.5C24.5 31.1 21.9 32 19 32V19L26.6 29.5z"
      />
      <path
        className={`st0 ${active > 6 ? "active" : ""}`}
        d="M19 19l-7.6 10.5c-2.2-1.6-3.9-3.9-4.7-6.5L19 19z"
      />
      <path
        className={`st0 ${active > 7 ? "active" : ""}`}
        d="M19 19L6.6 23C6.2 21.8 6 20.4 6 19c0-1.4 0.2-2.8 0.6-4L19 19z"
      />
      <path
        className={`st0 ${active > 8 ? "active" : ""}`}
        d="M19 19L6.6 15c0.8-2.6 2.5-4.9 4.7-6.5L19 19z"
      />
      <path
        className={`st0 ${active > 9 ? "active" : ""}`}
        d="M19 6v13L11.4 8.5C13.5 6.9 16.1 6 19 6z"
      />
      <path
        className={`st0 ${active > 5 ? "active" : ""}`}
        d="M19 19v13c-2.9 0-5.5-0.9-7.6-2.5L19 19z"
      />
      <path
        className={`st0 ${active > 0 ? "active" : ""}`}
        d="M26.6 8.5L19 19V6C21.9 6 24.5 6.9 26.6 8.5z"
      />
    </svg>
  );
}
