import React from "react";

import MajorSubHeader from "../../../../components/bottomTabs/home/board/MajorSubHeader";

const Medical = () => {
  const majorData = ["전체", "간호", "약학", "의료", "치료·보건"];

  return <MajorSubHeader majors={majorData} />;
};

export default Medical;
