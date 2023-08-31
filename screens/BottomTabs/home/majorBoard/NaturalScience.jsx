import React from "react";

import MajorSubHeader from "../../../../components/bottomTabs/home/board/MajorSubHeader";

const NaturalScience = () => {
  const majorData = [
    "전체",
    "농림·수산",
    "생물·화학·환경",
    "생활과학",
    "수학·물리·천문·지리",
  ];

  return <MajorSubHeader majors={majorData} />;
};

export default NaturalScience;
