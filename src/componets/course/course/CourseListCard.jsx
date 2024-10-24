import { Fragment } from "react";
import React from "react";
import Card from '../Card';
import CourseItem from "./CourseItem";
// import './CourseListCard.css';  // CSS 파일 추가

function CourseListCard({ title, items }) {
  const lastIndex = items.length - 1;

  return (
    <div className="course-list-container">  {/* 컨테이너 div 추가 */}
      <Card title={title}>
        <div className="courses">
          {items.map((item, index) => (
            <Fragment key={item.id}>
              <CourseItem {...item} />
              {index !== lastIndex && <hr className="divider" />}
            </Fragment>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default CourseListCard;