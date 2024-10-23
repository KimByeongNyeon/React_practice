import React from "react";

function HeartIconBtn({ isFavorite = false }) {
  return (
    <button className="btn">
      {isFavorite ? <img className="btn__img" src="/img/heart-fill-icon.svg" alt="이미지 없음" /> : <img className="btn__img" src="/img/heart-icon.svg" alt="이미지 없음" />}
    </button>
  );
}
function LinkBtn({ link }) {
  return (
    link && (
      <a href={link} className="btn" target="_blank" rel="noreferrer">
        <img src="/img/link-icon.svg" alt="" className="btn__img" />
      </a>
    )
  );
}

export default function CouseItem({ title, description, thumnail, isFavorite, link }) {
  return (
    <article className="course">
      <img className="course__img" src={thumnail} alt="이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description} </div>
      </div>
      <div className="course_icons">
        <HeartIconBtn isFavorite={isFavorite} />
      </div>
        <LinkBtn link={link} />
    </article>
  );
}
