import './Sidebar.css'
import PublicIcon from '@mui/icons-material/Public';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-options">
                    <div className="sidebar-option">
                        <Link>HOME</Link>
                    </div>
                    <div className="sidebar-option">
                        <Link>PUBLIC</Link>
                        <div className="link">
                            <div className="link-tag">
                                <PublicIcon />
                                <p>Question</p>
                            </div>
                            <div className="tags">
                                <p>Tags</p>
                                <p>Users</p>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-option">
                        <Link>FIND A JOB</Link>
                        <div className="tags">
                            <p>Jobs</p>
                            <p>Companies</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;