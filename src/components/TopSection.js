import React from 'react';
import menuIcon from '../images/menu-icon.svg'
import '../styles/style.css';

function TopSection(props) {

    const onOpen = () => {
        document.getElementsByClassName('sidebar')[0].style.display = 'block';
        document.getElementsByClassName('sidebar')[0].style.animationName = 'slidein';
        document.getElementsByClassName('sidebar')[0].style.left = '0';
        document.getElementsByClassName('content')[0].style.animationName = 'slidein';
        document.getElementsByClassName('content')[0].style.left = '0';
    }

    return (
        <div className='content-top-section'>
            <button className='openbtn' onClick={onOpen}><img src = {menuIcon} alt="" style={{width:'24px'}}/></button><div className='contenttitle'>{props.title}</div>
        </div>
    );
}

export default TopSection;