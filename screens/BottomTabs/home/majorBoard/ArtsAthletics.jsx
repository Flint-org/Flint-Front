import React from "react";

import MajorSubHeader from "../../../../components/bottomTabs/home/board/MajorSubHeader";

const ArtsAthletics = () => {
  const majorData = [
    "전체",
    "디자인",
    "무용·체육",
    "미술·조형",
    "연극·영화",
    "음악",
  ];

  return <MajorSubHeader majors={majorData} />;
};

export default ArtsAthletics;
