import React, {useState} from 'react';
import Sidebar from './Sidebar';
import { Checkbox } from 'antd';
import TopSection from './TopSection'
import '../styles/style.css';

function Page6(props) {

    const [arr, setArr] = useState(['a', 'b', 'c']);
    
    return (
        <div className='body-content'>
            <Sidebar />
            <div className='content'>
                <TopSection title='SiteNameLogo' />
                <h4 className='pt-4 ps-3' style={{fontWeight: '700', width: '100vw', marginTop:'50px'}}>Manage Group: {localStorage.getItem('curr')}</h4>
                <p className='ps-3 group-detail' style={{fontSize: '15px'}}>{localStorage.getItem('curr')} &gt; <strong>Join Requests</strong></p>
                <div className='row mt-3 mx-0 ps-3 pe-4'>
                    <div className='col-6 text-center p-0'></div>
                    <div className='col-3 text-center p-0'>
                        <p className='group-detail' style={{fontSize: '15px'}}>accept</p>
                    </div>
                    <div className='col-3 text-center p-0'>
                        <p className='group-detail' style={{fontSize: '15px'}}>decline</p>
                    </div>
                    {arr.length > 0 && 
                        arr.map(item => {
                            return (
                                <>
                                    <div className='col-6 text-center p-0 mt-2 pe-2' style={{backgroundColor: 'grey', height: '40px'}}></div>
                                    <div className='col-3 text-center p-0 mt-2 pt-2'>
                                        <Checkbox />
                                    </div>
                                    <div className='col-3 text-center p-0 mt-2 pt-2'>
                                        <Checkbox />
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className='mt-4 mx-0 px-3 text-center'>
                    <button className='find-btn px-3 mb-3 mx-0' style={{width: '80%', height: '40px'}}>Accept / Decline as Selected</button>
                    <p className='m-0' style={{fontSize: '25px', fontWeight: '500'}}>or</p>
                    <button className='find-btn px-3 mt-3 mx-0' style={{width: '80%', height: '40px'}}>Accept All</button>
                </div>
            </div>
        </div>    
    );
}

export default Page6;