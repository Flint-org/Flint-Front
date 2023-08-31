import React from "react";

import MajorSubHeader from "../../../../components/bottomTabs/home/board/MajorSubHeader";

const LiberalArts = () => {
  const majorData = ["전체", "언어·문학", "인문과학"];

  return <MajorSubHeader majors={majorData} />;
};

export default LiberalArts;
