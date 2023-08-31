import React from "react";

import MajorSubHeader from "../../../../components/bottomTabs/home/board/MajorSubHeader";

const Engineering = () => {
  const majorData = [
    "전체",
    "건축",
    "교통·운송",
    "기계·금속",
    "산업",
    "소재·재료",
    "전기·전자",
    "정밀에너지",
    "컴퓨터·AI",
    "토목·도시",
    "화공",
  ];

  return <MajorSubHeader majors={majorData} />;
};

export default Engineering;
