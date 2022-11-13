import "../StackOverFlow/Index.css";
import Sidebar from "../StackOverFlow/Sidebar";
import MainQuestion from "./MainQuestion";

function ViewIndex() {
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <MainQuestion />
      </div>
    </div>
  );
}

export default ViewIndex;