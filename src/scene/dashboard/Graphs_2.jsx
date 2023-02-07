import React from "react";
import BankCardDetails from "../../components/BankCardDetails";
import SalesCard from "../../components/SalesCard";
import SalesReportGraph from "../../components/SalesReportGraph";

function Graphs2() {
  return (
    <div className="">
      <div style={{ width: "100%" }}>
        <div className="w-[90%] my-0 mx-auto">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "70%" }}>
              <SalesReportGraph />
            </div>
            <div
              className="flex flex-col space-y-7 w-[27%]"
              //   style={{ width: "30%" }}
            >
              <BankCardDetails />
              <SalesCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphs2;
