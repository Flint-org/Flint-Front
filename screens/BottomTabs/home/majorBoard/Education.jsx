import React from "react";

import MajorSubHeader from "../../../../components/bottomTabs/home/board/MajorSubHeader";

const Education = () => {
  const majorData = ["전체", "교육일반", "유아", "초등", "중등", "특수"];

  return <MajorSubHeader majors={majorData} />;
};

export default Education;
