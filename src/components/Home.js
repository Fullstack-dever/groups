import React from 'react';
import Sidebar from './Sidebar';
import TopSection from './TopSection'
import '../styles/style.css';

function Home() {
    return (
        <div className='body-content'>
            <Sidebar />
            <div className='content'>
                <TopSection title='Test' />
                <p className='pt-2 ps-3 mb-0 heading-1'  style={{ width:'100vw', marginTop:'50px'}}>Allow Genders:</p>
                <div className='row pt-2 ps-3'>
                    <div className='col-4 mb-2'>
                        <input className='check-box' type='checkbox'/><label className='ps-2' for="photos"> Male</label>
                    </div>
                    <div className='col-4 mb-2'>
                        <input className='check-box' type='checkbox'/><label className='ps-2' for="videos"> Female</label>
                    </div>
                    <div className='col-4 mb-2'>
                        <input className='check-box' type='checkbox'/><label className='ps-2' for="status"> TG</label>
                    </div>
                </div>
                <p className='pt-2 ps-3 mt-3 heading-1'>Gender Ratio:</p>
            </div>
        </div>    
    );
}

export default Home;