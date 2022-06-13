import React from 'react';
import Sidebar from './Sidebar';
import TopSection from './TopSection'
import '../styles/style.css';

function Page6(props) {
    return (
        <div className='body-content'>
            <Sidebar />
            <div className='content'>
                <TopSection title='SiteNameLogo' />
                <h4 className='pt-4 ps-3' style={{fontWeight: '700', width: '100vw', marginTop:'50px'}}>Manage Group: {localStorage.getItem('curr')}</h4>
                <div className='row mx-0 mb-3 px-3'>
                    <div className='col-4 p-0 text-center'>
                        <div className='empty'>
                        </div>
                    </div>
                    <div className='col-8 ps-2'>
                        <p className='group-detail'><strong>Members:</strong> 3,200</p>
                        <p className='group-detail'><strong>Posts:</strong> 45,678</p>
                        <p className='group-detail'><strong>Posts/min:</strong> 12</p>
                        <p className='group-detail'><strong>Last Post:</strong> 13 mins ago</p>
                        <p className='m-0'>(more stats)</p>
                    </div>
                </div>
                <div className='row m-0 px-3'>
                    <a className='link-btn mb-3' href='join-request'>View Join Requests ( 5 new )</a>
                    <a className='link-btn mb-3' href='#'>Settings Review</a>
                    <a className='link-btn mb-3' href='manage-group-member'>Manage Group Members</a>
                    <a className='link-btn mb-3' href='#'>View Group</a>
                </div>
            </div>
        </div>    
    );
}

export default Page6;