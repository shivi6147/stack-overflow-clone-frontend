import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';



function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <div className='header-container'>
                <div className='header-left'>
                    <img src="https://miro.medium.com/max/1200/0*UEtwA2ask7vQYW06.png" alt="logo"
                        onClick={() => navigate("/")} />
                </div>
                <div className='header-middle'>
                    <div className='header-search-container'>
                        <SearchIcon />
                        <input type='text' placeholder='Search...' />
                    </div>
                </div>
                <div className='header-right'>
                    <div className='header-right-container'>
                        <Avatar>SS</Avatar>
                        <HelpIcon onClick={() => navigate("/add-question")} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header