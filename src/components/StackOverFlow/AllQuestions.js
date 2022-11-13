import './AllQuestions.css';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';


function AllQuestion() {
    return (
        <div className='all-questions'>
            <div className='all-questions-container'>
                <div className='all-questions-left'>
                    <div className='all-options'>
                        <div className='all-option'>
                            <p>0</p>
                            <span>Votes</span>
                        </div>
                        <div className='all-option'>
                            <p>1</p>
                            <span>Answers</span>
                        </div>
                        <div className='all-option'>
                            <small>0 Views</small>
                        </div>
                    </div>
                </div>
                <div className='question-answer'>
                    <Link>What is the difference between React Native and React?</Link>
                    <div className='question-answer'>I have started to learn React out of curiosity and wanted to know the difference between React and React Native - though could not find a satisfactory answer using Google. … React and React Native...</div>
                    <div className='author-tags'>
                        <div style={{ display: "flex" }}>
                            <span className='question-tags'>react</span>
                            <span className='question-tags'>ants</span>
                            <span className='question-tags'>frontend</span>
                        </div>
                        <div className='author'>
                            <div className='author-details'>
                                <Avatar>SS</Avatar>
                                <p>User Name</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default AllQuestion;