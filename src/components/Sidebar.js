import React, {useState, useEffect} from 'react';
import '../styles/style.css';

function Sidebar() {

    const [sideMenu, setSideMenu] = useState(['your stream', 'your groups', 'popular groups', 'find groups', 'start a group', 'manage groups']);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let topPos = window.pageYOffset + 'px';
            document.getElementsByClassName('sidebar')[0].style.top = topPos;
        });
    }, []);

    const onClose = () => {
        document.getElementsByClassName('sidebar')[0].style.animationName = 'slideout';
        document.getElementsByClassName('sidebar')[0].style.left = '-185px';
        document.getElementsByClassName('content')[0].style.animationName = 'slideout';
        document.getElementsByClassName('content')[0].style.left = '-185px';
    }

    const menuClick = (e) => {
        e.target.children[0].click()
    }

    return (
        <div className='sidebar'>
            <div className='sidebar-top-section'>
                <button className='closebtn' onClick={onClose}><p className='closebtnlb'>&lt;</p></button><a className='link' href='groups'><span className='sidetitle'>Groups</span></a>
            </div>
            {sideMenu.map((item, i) => {
                let url = '/' + item.split(' ').join('-');
                return(
                    <div className='sidebar-section' id={i} onClick={menuClick}><a className='link' href={url}>{item}</a></div>
                )
            })}
        </div>
    );
}

export default Sidebar;