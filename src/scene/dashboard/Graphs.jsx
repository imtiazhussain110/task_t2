import React from "react";
import NumOfClicksGraph from "../../components/NumOfClicksGraph";
import StudentsEnrolledGraph from "../../components/StudentsEnrolledGraph";

function Graphs() {
  return (
    <div className="w-[100%] ">
      <div className="w-[90%] my-0 mx-auto">
        <div className="flex justify-between dashboardGraphContainer">
          <div className="w-[50%] dashboardGraphs">
            <StudentsEnrolledGraph />
          </div>
          <div className="w-[50%] dashboardGraphs">
            <NumOfClicksGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphs;
