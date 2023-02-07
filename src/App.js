import CourseSubscription from "./components/course_subscription/CourseSubscription";
import RecentCourses from "./components/recent_courses/RecentCourses";
import Graphs from "./scene/dashboard/Graphs";
import Graphs2 from "./scene/dashboard/Graphs_2";
import Graph2Second from "./scene/dashboard/Graph_2_Second";

function App() {
  return (
    <>
      <Graphs />
      {/* <div className="flex flex-col gap-[69px] py-5 bg-[#F0EFF0]">
        <Graphs2 />
        <Graph2Second />
      </div> */}
      {/* <CourseSubscription /> */}
      {/* <RecentCourses /> */}
    </>
  );
}

export default App;
