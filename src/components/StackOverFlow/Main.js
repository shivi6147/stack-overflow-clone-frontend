import './Main.css';
import AllQuestion from "./AllQuestions";
import { useNavigate } from 'react-router-dom';


function Main() {
    const navigate = useNavigate();
    return (
        <div className="main">
            <div className="main-container">
                <div className="main-top">
                    <h2>All Questions</h2>
                    <button onClick={() => navigate("/add-question")}>Ask Questions</button>
                </div>
                <div className="questions">
                    <div className="question">
                        <AllQuestion />
                        <AllQuestion />
                        <AllQuestion />
                        <AllQuestion />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Main;