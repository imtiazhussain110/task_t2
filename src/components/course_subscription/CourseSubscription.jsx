import React from "react";
import crossIcon from "../../assets/cross_icon.svg";

function CourseSubscription() {
  return (
    <div className=" backdrop-blur-sm bg-slate-300 w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[50%] h-[999px] bg-white border-2 rounded-b-[24px]">
        <div className="w-[100%]">
          {/*  ---- heading ------ */}
          <div className="w-[100%] h-[86px] bg-[#F1F1F1] flex items-center justify-start lg:justify-center pl-6 relative">
            <p className="text-[26px] leading-[26px] text-[#4D4F5C]">
              Course Subscription
            </p>
            <img
              className="h-[38px] w-[38px] absolute top-6 right-5"
              src={crossIcon}
              alt="Cancel Icon"
            />
          </div>
          {/*  ---- body ------ */}
          <div className="text-center my-[50px] ">
            <p className="text-[#4D4F5C]">
              You can Update the status of course subscription from here
            </p>
          </div>
          <hr className="border-b-[#707070] border-b-[1px] mx-4 mb-[50px]" />
          {/* Course Subscription Action Section */}
          <div className="w-[100%] flex justify-center ">
            <div className="w-[85%] flex flex-col gap-8">
              <div className="flex justify-between textCol-action">
                <p className="text-[#4D4F5C] text-[22px] font-normal textSmall">
                  Visa: **** **** **** (092)
                </p>
                <p className="text-[#4D4F5C] text-[22px] font-normal textSmall">
                  Payment Method: One Time pay
                </p>
              </div>
              <div className="flex justify-between textCol-action">
                <p className="text-[#4D4F5C] text-[22px] font-normal textSmall">
                  Next Installment Date: 10 / 06 / 2022
                </p>
                <a
                  href="#"
                  className="text-[22px] underline text-[#157DBC] font-normal textSmall"
                >
                  View BillingHistory
                </a>
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="flex my-[64px] justify-center gap-6 customActionBtn">
            <button className="bg-[#A1A3EF] text-white text-[22px] py-[17px] px-[29px] rounded-[7px] customActionBtnStyle">
              Put Course Status on Hold
            </button>
            <button className="bg-[#FF5163] text-white text-[22px] py-[17px] px-[59px] rounded-[7px]  customActionBtnStyle">
              Cancel Subscription
            </button>
          </div>
          {/* Payment Details Section */}
          <div className="w-[100%]">
            <div className="pl-12 pr-5">
              <h3 className="text-[24px] font-bold ">Payment Details</h3>
              <div className="flex justify-between my-[26px] paymentSection">
                <div className="flex flex-col gap-[21px] w-[339px]">
                  <div className="flex justify-between">
                    <p className="text-[22px] leading-[22px] whitespace-nowrap">
                      Total Paids:
                    </p>
                    <span className="text-[22px] leading-[22px] whitespace-nowrap">
                      300 $
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[22px] leading-[22px] whitespace-nowrap">
                      Remaining Amount:
                    </p>
                    <span className="text-[22px] leading-[22px] whitespace-nowrap">
                      0 $
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[22px] leading-[22px] whitespace-nowrap">
                      Remaining Amount:
                    </p>
                    <span className="text-[22px] leading-[22px] whitespace-nowrap text-[#FF5163]">
                      75 $
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[21px] w-[339px] ml-[25px] paymentSecondSection">
                  <div className="flex justify-between">
                    <p className="text-[22px] leading-[22px] whitespace-nowrap">
                      Course Fee:
                    </p>
                    <span className="text-[22px] leading-[22px] whitespace-nowrap">
                      300 $
                    </span>
                    <span></span>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[22px] leading-[22px] whitespace-nowrap">
                      1st Installment:
                    </p>
                    <span className="text-[22px] leading-[22px] whitespace-nowrap">
                      300 $
                    </span>
                    <span className="text-[22px] leading-[22px] whitespace-nowrap">
                      Paid
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSubscription;

// const PaymentDetailRow = ()=> {
//     return (

//     )
// }
