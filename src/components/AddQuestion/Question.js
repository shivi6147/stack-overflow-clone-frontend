import './Question.css'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Question() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const navigate = useNavigate();

    const handleQuill = (value) => {
        setBody(value)
    }

    return (
        <div className="add-question">
            <div className="add-question-container">
                <div className="head-title">
                    <h1>Ask a public question</h1>
                </div>
                <div className="question-container">
                    <div className="question-options">
                        <div className="question-option">
                            <div className="title">
                                <h3>Title</h3>
                                <small>Be specific and imaging you're asking a question to another person</small>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder="Add question title" />
                            </div>
                        </div>
                        <div className="question-option">
                            <div className="title">
                                <h3>Body</h3>
                                <small>Include all the information someone would need to answer your question</small>
                                <ReactQuill value={body} onChange={handleQuill} className="react-quill" theme="snow" />
                            </div>
                        </div>
                        <div className="question-option">
                            <div className="title">
                                <h3 className='tags-title'>Tags</h3>
                                <small>Add upto 5 tags to describe what your question is about</small>
                                <input value={tags} onChange={setTags} type='text' placeholder="Add question title" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='add-question-button'>
                    <button type='submit' onClick={() => navigate("/")}>Add your question</button>
                </div>
            </div>

        </div>
    )
}

export default Question;