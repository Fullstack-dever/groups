import React from 'react';
import Sidebar from './Sidebar';
import TopSection from './TopSection'
import '../styles/style.css';

function Page2() {

    return (
        <div className='body-content'>
            <Sidebar />
            <div className='content'>
                <TopSection title='SiteName Logo' />
                <h4 className='pt-4 ps-3' style={{fontWeight: '700', width: '100vw', marginTop:'50px'}}>Start Your Own Group</h4>
                <div className='content-bottom ps-5 pe-5'>
                    <p className='px-2 py-1 my-4 heading-1'>You need to be a premium member to start a group</p>
                    <div className='mt-5 upgrade-section'><a className='upgrade-btn' href='/page3'>Upgrade to Premium</a></div>
                    <p className='px-2 py-1 mt-4 content-1'>Use this button to upgrade to Premium and not only will you be able to start your own group but you will also be able to access all the premium features on the main SiteName site. Videos, larger photos, notifications, photo manager and so much more.</p>
                </div>
            </div>
        </div>    
    );
}

export default Page2;