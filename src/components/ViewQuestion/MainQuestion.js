import Avatar from '@mui/material/Avatar';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ReactQuill from "react-quill";
import "./ViewIndex.css";
import { useState } from "react";
import React, { Component } from 'react';

function MainQuestion() {
    const [show, setShow] = useState(false);
    return (
        <div className="main">
            <div className="main-container">
                <div className="main-top">
                    <h2 className="main-question">This is question Title</h2>
                    <button>Ask Question</button>
                </div>
                <div className="main-desc">
                    <div className="info">
                        <p>Asked</p>
                        <p>Active<span>today</span></p>
                        <p>Viewed<span>43times</span></p>
                    </div>
                </div>
                <div className="all-questions">
                    <div className="all-questions-container">
                        <div className="all-questions-left">
                            <div className="all-options">
                                <p className="arrow">▲</p>
                                <p className="arrow">0</p>
                                <p className="arrow">▼</p>
                                <BookmarkIcon />

                            </div>
                        </div>
                        <div className="question-answer">
                            <p>This is question body</p>
                            <div className="author">
                                <small>asked "Timestamp"</small>
                                <div className="auth-details">
                                    <Avatar />
                                    <p>Author Name</p>
                                </div>
                            </div>
                            <div className="comments">
                                <div className="comment">
                                    <p>This is comment <span>UserName</span></p>
                                </div>
                                <p onClick={() => setShow(!show)}>Add a comment</p>
                                {show && (
                                    <div className="title">
                                        <textarea
                                            style={{
                                                margin: "5px 0px",
                                                padding: "10px",
                                                border: "1px solid rgba(0, 0, 0, 0.2)",
                                                borderRadius: "3px",
                                                outline: "none",
                                            }}
                                            type="text"
                                            placeholder="Add your comment..."
                                            rows={5}
                                        />
                                        <button style={{ maxWidth: "fit-content", }}>
                                            Add comment
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all-questions">
                    <p style={{
                        marginBottom: "20px",
                        fontSize: "1.3rem",
                        fontWeight: "300",
                    }}>No of Answers </p>
                    <div style={{
                        borderBottom: "1px solid #eee",
                    }} className="all-questions-container">
                        <div className="all-questions-left">
                            <div className="all-options">
                                <p className="arrow">▲</p>
                                <p className="arrow">0</p>
                                <p className="arrow">▼</p>
                                <BookmarkIcon />
                            </div>
                        </div>
                    </div>
                    <div className="question-answer">
                        <p>This is question body</p>
                        <div className="author">
                            <small>Asked "Time Stamp"</small>
                            <div className="auth-details">
                                <Avatar />
                                <p>Username</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-answer">
                    <h3 style={{
                        fontSize: "22px",
                        margin: "10px 0",
                        fontWeight: "400",
                    }}>Your Answer</h3>
                    <ReactQuill className="react-quill" theme="snow" style={{ height: "200px" }} />
                </div>
                <button style={{
                    marginTop: "100px",
                    maxWidth: "fit-content",
                }}>Post your answer</button>
            </div>
        </div >
    );
}

export default MainQuestion;