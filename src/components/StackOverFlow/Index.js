import './Index.css'
import Main from "./Main";
import Sidebar from "./Sidebar";

function Index() {
    return (
        <div className="stack-index">
            <div className="stack-index-content">
                <Sidebar />
                <Main />
            </div>
        </div>
    );
}

export default Index;