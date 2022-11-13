import { useState } from "react";
import "./Index.css";

function UserLogin() {

    const [register, setRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    return (
        <div className="auth">
            <div className="auth-container">
                <div className="auth-login">
                    <div className="auth-login-container">
                        {register ? (
                            <>
                                {" "}
                                <div className="input-field">
                                    <p>Username</p>
                                    <input
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        type="text"
                                    />
                                </div>
                                <div className="input-field">
                                    <p>Email</p>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="text"
                                    />
                                </div>
                                <div className="input-field">
                                    <p>Password</p>
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                    />
                                </div>
                                <button
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    Register
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="input-field">
                                    <p>Email</p>
                                    <input type="text" placeholder="email" />
                                </div>
                                <div className="input-field">
                                    <p>Password</p>
                                    <input type="password" placeholder="password" />
                                </div>
                                <button
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    Login
                                </button>
                            </>
                        )}

                        <p
                            onClick={() => setRegister(!register)}
                            style={{
                                marginTop: "10px",
                                textAlign: "center",
                                color: "#0095ff",
                                textDecoration: "underline",
                                cursor: "pointer",
                            }}
                        >
                            {register ? "Login" : "Register"} ?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;