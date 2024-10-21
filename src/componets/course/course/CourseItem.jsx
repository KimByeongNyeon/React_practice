import React from "react";

export default function CouseItem({title, description, thumnail}) {
  return (
    <article className="course">
      <img className="course__img" src={thumnail} alt="이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description} </div>
      </div>
    </article>
  );
}
