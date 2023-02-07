import React from "react";

const InstituteTemplate = ({ Element, m_top }) => {
  if (!m_top) m_top = "mt-20";

  return (
    <div
      className={`flex flex-col items-center ml-0 ${m_top} sm:ml-24 w-full sm:w-[calc(100%-96px)]`}
    >
      <Element />
    </div>
  );
};

export default InstituteTemplate;
