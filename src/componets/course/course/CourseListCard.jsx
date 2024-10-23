import { Fragment } from "react";
import React from "react";
import Card from '../Card';
import CourseItem from "./CourseItem";

function CourseListCard({ title, items }) {

  const lastIndex = items.length - 1;

  return (
    <>
    <Card title={title}>
      <div className="courses">
        {items.map((item, index) => (
          <Fragment key={item.id}>
          <CourseItem key={item.id}{...item} />
          {index !== lastIndex && <hr className="divider" />}
          
          </Fragment>
        ))}
        </div>
    </Card>
    </>
  );
}

export default CourseListCard;
