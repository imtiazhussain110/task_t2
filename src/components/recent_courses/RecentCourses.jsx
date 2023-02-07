import React from "react";
import cardImage from "../../assets/images/card_image.png";
import editIcon from "../../assets/edit_icon.svg";
import deleteIcon from "../../assets/delete_icon.svg";

function RecentCourses() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="bg-[#F7F7F7] h-[100%]">
      <div className=" px-[42px] pt-5 w-[64%] border-2 ">
        {/* top */}
        <div className="mx-5">
          {/* Heading */}
          <div className="flex justify-between mr-9">
            <h3 className="text-[22px] font-medium leading-5">
              Recent Courses
            </h3>
            <button className="text-[20px] leading-[18px] bg-[#A1A3EF] rounded-t-[12px] rounded-b-[16px] px-[31px] py-[14px] text-white">
              Show All
            </button>
          </div>
          {/* buttons */}
          <div className="flex gap-1 mt-[10px]">
            <CustomButton text="All Courses" />
            <CustomButton text="To be reviewed" />
            <CustomButton text="Approved" />
            <CustomButton text="Rejected" />
            <CustomButton text="Vehicle Dashboard" />
          </div>
        </div>
        {/* recent courses list */}
        <div className="bg-white h-[1044px] px-[21px] py-[37px]">
          {arr.map(() => (
            <div className="px-[4px] py-[6px] border rounded-[8px] drop-shadow-[4px_5px_3px_rgba(0,0,0,0.16)] mb-[23px]">
              <div className="flex">
                {/* image */}

                <img
                  className="h-[168px] w-[292px] cardImg"
                  src={cardImage}
                  alt="Automotive Course"
                />
                <div className="cardBody flex">
                  {/* middle section */}

                  <div className="flex flex-col pl-[21px] pr-[27px] justify-between my-2">
                    <div>
                      <p className="text-[26px] leading-[26px] cardHeading">
                        Automotive Course
                      </p>
                      <p className="text-[26px] leading-[26px] cardHeading">
                        L Type - G | V Type - L
                      </p>
                    </div>

                    <p className="text-[14px] leading-[22px] pr-7 cardSubtitle">
                      Class G. Allowed to drive any car, van or small truck or
                      combination of vehicle and towed vehicle up to 11,000
                      kilograms provided the vehicle towed is not over 4,600
                      kilograms
                    </p>
                  </div>
                  <div className="border-r h-[137px] my-auto mx-[30px] cardHr"></div>
                  {/* right section */}
                  <div className="w-[230px] pr-[30px] mt-[24px] cardFoterWidth">
                    <div className="flex flex-col  items-center cardFoter">
                      <p className="text-[24px] leading-[24px] ">Status</p>
                      <button className="rounded-[6px] py-[11px] px-[16px] text-left text-[13px] leading-[13px] bg-[#FF9C46] text-[#FF9C46]  bg-opacity-20 mt-[18px] mb-[25px] w-[118px]">
                        IN PROGRESS
                      </button>
                      <div className="flex gap-[15px]">
                        <img
                          className="w-[28px] h-[25px]"
                          src={editIcon}
                          alt="Edit Icon"
                        />
                        <img
                          className="w-[19px] h-[25px]"
                          src={deleteIcon}
                          alt="Delete Icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentCourses;

const CustomButton = ({ text }) => {
  return (
    <button className="bg-white text-[#576271] px-[25px] py-[31px] rounded-t-[12px] w-[19%] text-left">
      {text}
    </button>
  );
};
