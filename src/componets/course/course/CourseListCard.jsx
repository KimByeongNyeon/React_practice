import React from "react";
import Card from '../Card';
import CourseItem from "./CourseItem";

function CourseListCard({ items }) {
  const [course1, course2, course3] = items;
  return (
    <>
    <Card title="강의 목록">
      <div>Hello React!!
      <div className="courses">
          <CourseItem {...course1} />
          <CourseItem {...course2} />
          <CourseItem {...course3} />
        </div>
      </div>
    </Card>
    </>
  );
}

export default CourseListCard;
