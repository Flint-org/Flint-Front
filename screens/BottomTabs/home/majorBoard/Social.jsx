import React from "react";

import MajorSubHeader from "../../../../components/bottomTabs/home/board/MajorSubHeader";

const Social = () => {
  const majorData = ["전체", "경영·경제", "법률", "사회과학"];

  return <MajorSubHeader majors={majorData} />;
};

export default Social;
